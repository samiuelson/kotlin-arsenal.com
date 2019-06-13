package com.kotlin_arsenal

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

fun main() {
    embeddedServer(Netty, 8080) {
        routing {
            get("/") {
                call.respondText("Bonjour! Ca va?", ContentType.Text.Html)
            }
            get("/libraries") {
                call.respondText("Kotlin libraries", ContentType.Text.Html)
            }
        }
    }.start(wait = true)
}