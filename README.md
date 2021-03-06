![Hits](https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2Fimmannino%2Fpkmngo.me)

# Trainer Card Buddy

> Create and Share your Pokemon Go trainer card online!

[Checkout the demo](https://www.pkmngo.me/demo)

I wanted to create a cool way to share my Pokemon Go trainer card online, and this is what I have come up with. Using the form on the site, you can enter your Pokemon Go information, and the API will automatically generate an SVG or PNG image to share online.

## How it works
1. Enter your trainer name & trainer code, and select one of the card styles
2. The api will enter your information into the SVG template, and create a QR code for your Trainer Code.
3. What you see in response is either the SVG or PNG version of your Trainer card.

All the card templates are SVGs I have created in Figma, and then I copy the SVG source into Node, and add in the users data using string interpolation. This results in a fairly quick and efficient system for dynamically creating SVGs. Think of it as Server-Side Rendered SVG templates.

### Endpoints
| Endpoint | Description |
| -------- | ----------- |
| `/:name/:code?style={}` | Returns a SVG template for your Pokemon Go Trainer card |
| `/:name/:code/card.png?style={}` | Returns a PNG template for your Pokemon Go Trainer card. This endpoint shares better for online social platforms, allowing others to see the image when you share it. |


### To Do:

1. The site will go live at `https://www.pkmngo.me`. I'm currently waiting for a CNAME issue to get resolved at Glitch.com.
2. Update contribution guides
3. Upload Figma file for SVG templates.


### Examples
![Valor](https://www.pkmngo.me/Valor/0414-5988-7356/card.svg?style=valor)
![Instinct](https://www.pkmngo.me/Instinct/0414-5988-7356/card.svg?style=instinct)
![Mystic](https://www.pkmngo.me/Mystic/0414-5988-7356/card.svg?style=mystic)
![Eevee](https://www.pkmngo.me/Eevee/0414-5988-7356/card.svg?style=eevee)
![Pikachu](https://www.pkmngo.me/Pikachu/0414-5988-7356/card.svg?style=pikachu)
![Love](https://www.pkmngo.me/Love/0414-5988-7356/card.svg?style=love)
![Map](https://www.pkmngo.me/Map/0414-5988-7356/card.svg?style=map)
![Team Rocket](https://www.pkmngo.me/Team%20Rocket%20Dark/0414-5988-7356/card.svg?style=rocketDark)


