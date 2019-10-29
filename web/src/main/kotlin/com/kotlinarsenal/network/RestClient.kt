package com.kotlinarsenal.service

import kotlinx.coroutines.await
import kotlinx.coroutines.withContext
import org.w3c.fetch.RequestInit
import kotlin.browser.window
import kotlin.coroutines.CoroutineContext
import kotlin.js.json


class RestClient(private val coroutineContext: CoroutineContext) {
    suspend fun fetch(url: String): String {
        return withContext(coroutineContext) {
            val response = window.fetch(
                url, RequestInit(
                    "GET", headers = json(
                        "Accept" to "application/json",
                        "Content-Type" to "application/json"
                    )
                )
            ).await()
            response.text().await()
        }
    }
}
