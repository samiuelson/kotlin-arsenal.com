package com.kotlinarsenal.data

import kotlinx.serialization.Serializable

@Serializable
data class Library(
    val githubUrl: String,
    val category: Category,
    val compatiblePlatforms: List<Platform> = emptyList()
) {
    val title: String
        get() = githubUrl.substringAfter("https://github.com/")

}

@Serializable
data class Category(val id: Int, val name: String)

@Serializable
data class Platform(val name: String)