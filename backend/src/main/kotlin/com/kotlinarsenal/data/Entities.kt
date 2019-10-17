package com.kotlinarsenal.data

data class Library(val githubUrl: String, val category: Category, val compatiblePlatforms: List<Platform> = emptyList())

data class Category(val id: Int, val name: String)

data class Platform(val name: String)