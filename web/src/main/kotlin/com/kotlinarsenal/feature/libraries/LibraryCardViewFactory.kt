package com.kotlinarsenal.feature.libraries

import com.kotlinarsenal.data.Library
import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document
import kotlin.dom.addClass

class LibraryCardViewFactory {
    fun build(library: Library): Element {
        val containerElement = document.createElement("div") as HTMLDivElement
        val titleElement = document.createElement("div") as HTMLDivElement
        bind(library = library, titleElement = titleElement)
        applyStyle(containerElement, titleElement = titleElement)
        containerElement.appendChild(titleElement)
        return containerElement
    }

    private fun applyStyle(containerElement: HTMLDivElement,
                           titleElement: HTMLDivElement) {
        containerElement.addClass("card", "card-shadow")
        titleElement.addClass("text-title", " float-left")
    }

    private fun bind(library: Library, titleElement: HTMLDivElement) {
        titleElement.innerHTML = library.title
    }
}
