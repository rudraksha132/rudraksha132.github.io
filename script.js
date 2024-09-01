window.onload = function() {
            const img = new Image();
            img.crossOrigin = 'Anonymous'; // This enables CORS for the image
            img.src = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'; // Use the background image URL

            img.onload = function() {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                // Set canvas dimensions to match the image
                canvas.width = img.width;
                canvas.height = img.height;

                // Draw the image on the canvas
                context.drawImage(img, 0, 0, img.width, img.height);

                // Get image data (top portion)
                const imgData = context.getImageData(0, 0, img.width, 50).data; // First 50px in height

                // Calculate the average color
                let r = 0, g = 0, b = 0;
                for (let i = 0; i < imgData.length; i += 4) {
                    r += imgData[i];
                    g += imgData[i + 1];
                    b += imgData[i + 2];
                }

                r = Math.floor(r / (imgData.length / 4));
                g = Math.floor(g / (imgData.length / 4));
                b = Math.floor(b / (imgData.length / 4));

                const avgColor = `rgb(${r}, ${g}, ${b})`;

                // Update the meta tag with the new color
                const themeMetaTag = document.querySelector('meta[name="theme-color"]');
                if (themeMetaTag) {
                    themeMetaTag.setAttribute('content', avgColor);
                } else {
                    const newMetaTag = document.createElement('meta');
                    newMetaTag.setAttribute('name', 'theme-color');
                    newMetaTag.setAttribute('content', avgColor);
                    document.head.appendChild(newMetaTag);
                }
            };
        };
