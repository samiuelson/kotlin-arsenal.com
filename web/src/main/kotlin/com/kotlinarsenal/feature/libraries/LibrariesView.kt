package com.kotlinarsenal.feature.libraries

import com.kotlinarsenal.Application
import com.kotlinarsenal.data.Category
import com.kotlinarsenal.data.Library
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document
import kotlin.dom.clear

class LibrariesView(private val app: Application) {

    private val loader = document.getElementById("loader") as HTMLDivElement
    private val content = document.getElementById("content") as HTMLDivElement
    private val cardViewFactory = LibraryCardViewFactory()
    private val viewModel: LibrariesViewModel = LibrariesViewModel(app, ::displayLibraries)

    fun show() {
        showLoader()
        viewModel.onCategorySelected(Category(Int.MAX_VALUE, "Everything"))
    }

    private fun displayLibraries(libraries: List<Library>) {
        console.log("Libraries passed to the view: $libraries")
        content.clear()
        hideLoader()
        libraries.forEach { library ->
            console.log(library.githubUrl)
            val card = cardViewFactory.build(library)
            content.appendChild(card)
        }
    }

    private fun showLoader() {
        loader.style.visibility = "visible"
    }

    private fun hideLoader() {
        loader.style.visibility = "hidden"
    }

}