package com.kotlinarsenal.feature.libraries

import com.kotlinarsenal.Application
import com.kotlinarsenal.data.Category
import com.kotlinarsenal.data.LibrariesRepository
import com.kotlinarsenal.data.Library
import kotlinx.coroutines.launch

class LibrariesViewModel(
    private val app: Application,
    private val librariesCallback: (List<Library>) -> Unit,
    private val repo: LibrariesRepository = LibrariesRepository(app)
) {
    fun onCategorySelected(category: Category) {
        console.log("onCategorySelected() ${category}")
        app.launch {
            repo.getLibraries().apply {
                console.log("${this.count()} libraries found")
                librariesCallback(this)
            }
        }
    }
}