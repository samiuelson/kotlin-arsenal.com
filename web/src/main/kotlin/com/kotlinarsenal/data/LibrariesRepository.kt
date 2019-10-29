package com.kotlinarsenal.data

import com.kotlinarsenal.API_URL
import com.kotlinarsenal.Application
import com.kotlinarsenal.service.RestClient
import kotlinx.serialization.json.Json
import kotlinx.serialization.list


class LibrariesRepository(
    private val app: Application,
    private val client: RestClient = RestClient(app.coroutineContext)
) {
    suspend fun getLibraries(): List<Library> =
        client.fetch(API_URL).run {
            Json.parse(Library.serializer().list, this)
        }
}