package com.kotlinarsenal.data.db

import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.Transaction
import org.jetbrains.exposed.sql.transactions.transaction
import java.net.URI
import java.sql.Connection
import java.sql.DriverManager

object Db {
    fun init() {
        getConnection()?.run {
            Database.connect({this})
        }
    }
}

fun getConnection(): Connection? {
    val dbUri = URI(System.getenv("DATABASE_URL"))
    val username = dbUri.userInfo?.split(":")?.get(0)
    val password = dbUri.userInfo.split(":")[1]
    val dbUrl = "jdbc:postgresql://" + dbUri.host + ':' + dbUri.port + dbUri.path + "?sslmode=require"
    return DriverManager.getConnection(dbUrl, username, password)
}


fun <T>connectAndExecute(statement: Transaction.() -> T): T {
    getConnection()?.run {
        Database.connect({this})
    }
    return transaction {
        statement()
    }
}