package com.kotlinarsenal

import com.kotlinarsenal.feature.libraries.LibrariesView
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlin.coroutines.CoroutineContext

object Application: CoroutineScope {
    override val coroutineContext: CoroutineContext = Job()

    fun start() {
        LibrariesView(this@Application).show()
    }
}

val API_URL = js("getApiUrl()") as String

fun main() {
    console.log("main() function called")
    Application.start()
}