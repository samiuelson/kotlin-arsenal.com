package com.kotlinarsenal

import com.kotlinarsenal.data.Category
import com.kotlinarsenal.data.Platform
import com.kotlinarsenal.data.db.*
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.CallLogging
import io.ktor.features.ContentNegotiation
import io.ktor.features.DefaultHeaders
import io.ktor.http.ContentType
import io.ktor.jackson.jackson
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.Routing
import io.ktor.routing.get
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.transactions.transaction

fun Application.main() {
    Db.init(dbUrl)

    transaction {
        addLogger(StdOutSqlLogger)
        SchemaUtils.create(Libraries, LibraryCategoryLookup, LibraryCompatiblePlatformLookup, LibrariesWithCompatiblePlatforms)
    }

    install(DefaultHeaders)
    install(CallLogging)
    install(ContentNegotiation) {
        jackson {}
    }
    install(Routing) {
        get("/") {
            call.respondText("Bonjour! Ca va?", ContentType.Text.Html)
        }
        get("/libraries") {
            val results = connectAndExecute(dbUrl) {
                Library.all().copy().toList().map { lib ->
                    val category = LibraryCategory.all().first { it.id == lib.category }
                    val platforms = lib.compatiblePlatforms.copy().map { Platform(it.name) }.toList()
                    com.kotlinarsenal.data.Library(lib.githubUrl, Category(category.id.value, category.name), platforms)
                }
            }
            call.respond(results)
        }
    }
}

val Application.envKind get() = environment.config.property("ktor.environment").getString()
val Application.isDev get() = envKind == "dev"
val Application.isProd get() = envKind != "dev"

val Application.dbUrl get() = environment.config.property("ktor.databaseUrl").getString()