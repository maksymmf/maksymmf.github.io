'use strict';

import { htmlTemplate } from './products.js';

function homeFunctions() {
    const url = "https://maksymmf.github.io/js/data.json";
    const featuredContent = document.querySelector('.featured-content');

    let fetchData = [];
    async function handleFetchRequest(url) {
        try {
            const response = await fetch(url);

            fetchData = await response.json();
        } catch (error) {
            return [];
        }
    }

    const showFeatured = async () => {
        await handleFetchRequest(url);

        const featuredArray = fetchData.slice(0, 3);

        htmlTemplate(featuredArray, featuredContent);
    };

    showFeatured();
}

document.addEventListener("DOMContentLoaded", homeFunctions);