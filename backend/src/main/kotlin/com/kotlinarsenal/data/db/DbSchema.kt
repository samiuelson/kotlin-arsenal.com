package com.kotlinarsenal.data.db

import org.jetbrains.exposed.dao.IntIdTable

object Libraries: IntIdTable("libraries") {
    val category = reference("category", LibraryCategoryLookup)
    val githubUrl = varchar("github_url", 1000).uniqueIndex()
}

object LibrariesWithCompatiblePlatforms: IntIdTable("library_with_platform") {
    val platform = reference("platform", LibraryCompatiblePlatformLookup).primaryKey()
    val library = reference("library", Libraries).primaryKey()
}

object LibraryCategoryLookup: IntIdTable("library_categories") {
    val name = varchar("name", 100).uniqueIndex()
}

object LibraryCompatiblePlatformLookup: IntIdTable("library_compatible_platforms") {
    val name = varchar("name", 100).uniqueIndex()
}