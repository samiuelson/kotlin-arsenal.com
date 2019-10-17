package com.kotlinarsenal.data.db

import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass

class Library(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Library>(Libraries)
    val category by Libraries.category
    val githubUrl by Libraries.githubUrl
    val compatiblePlatforms by LibraryCompatiblePlatform via LibrariesWithCompatiblePlatforms
}

class LibraryCategory(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<LibraryCategory>(LibraryCategoryLookup)
    val name by LibraryCategoryLookup.name
}

class LibraryCompatiblePlatform(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<LibraryCompatiblePlatform>(LibraryCompatiblePlatformLookup)
    val name by LibraryCompatiblePlatformLookup.name
}