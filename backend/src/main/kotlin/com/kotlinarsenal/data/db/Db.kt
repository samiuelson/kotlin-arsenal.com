package com.kotlinarsenal.data.db

import io.ktor.application.Application
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.Transaction
import org.jetbrains.exposed.sql.transactions.transaction
import java.net.URI
import java.sql.Connection
import java.sql.DriverManager

object Db {
    fun init(dbUrl: String) {
        getConnection(dbUrl)?.run {
            Database.connect({this})
        }
    }
}

fun getConnection(dbUrl: String): Connection? {
    val dbUri = URI(dbUrl)
    val username = dbUri.userInfo?.split(":")?.get(0)
    val password = dbUri.userInfo.split(":")[1]
    val url = "jdbc:postgresql://" + dbUri.host + ':' + dbUri.port + dbUri.path + "?sslmode=require"
    return DriverManager.getConnection(url, username, password)
}

fun <T>connectAndExecute(dbUrl: String, statement: Transaction.() -> T): T {
    getConnection(dbUrl)?.run {
        Database.connect({this})
    }
    return transaction {
        statement()
    }
}