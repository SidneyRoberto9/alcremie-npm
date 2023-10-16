<!-- <div align="center">
  <br />
  <p>
    <a href="https://discord.gg/DxHvWwC"><img src="https://media.discordapp.net/attachments/682872468322648119/682872516259217418/akaneko.png" width="546" alt="Cute As Fubuki" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/akaneko"><img src="https://img.shields.io/npm/v/akaneko.svg?maxAge=3600"/></a>
    <a href="https://www.npmjs.com/package/akaneko"><img src="https://img.shields.io/npm/dt/akaneko.svg?maxAge=3600"/></a>
    <a href="https://www.npmjs.com/package/akaneko"><img src="https://badgen.net/packagephobia/install/akaneko"></a>
  </p>
</div> -->

Alcremie is a package full of images related to waifus, but remember that
I'm the only one working on it, and I choose images that will be added. Use it for your Discord Bot, your own consumption or whatever :3

## Application/Demo

Take a look at this package working in my gallery OwO

[Alcremie App](https://alcremie.vercel.app/)

## Installation

`npm install alcremie`

## Example(s)

**NodeJS:**

```javascript
// Alcremie //
const alcremie = require('alcremie');

async function yourFunctionName() {
  // Get a random Image //
  console.log('Random Image: ' + (await alcremie.random()));

  // Fetch Image  //
  console.log('Data:' + (await alcremie.image()));

  // Fetch 100 images //
  console.log('Data:' + (await alcremie.image({ limit: 100 })));

  // Get Status //
  console.log('Status:' + (await alcremie.status()));
}

// Call your Function! //
yourFunctionName();
```

<!--
## SFW Function(s)

Example:

```javascript
akaneko.function(); // Format
akaneko.foxgirl(); // Awoo!~ Another example!
akaneko.neko(); // Meow! An Example!
```

| Function | Description                           |
| -------- | ------------------------------------- |
| neko     | SFW Neko Girls (Cat Girls)            |
| foxgirl  | SFW Fox Girls (Thanks to @LamkasDev!) |

## NSFW Function(s)

Example:

```javascript
akaneko.nsfw.function(); // Format
akaneko.nsfw.hentai(); // Example
akaneko.nsfw.feet(); // Another Example
```

| Function      | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| ass           | I know you like anime ass~ uwu                                     |
| bdsm          | If you don't know what it is, search it up                         |
| blowjob       | Basically an image of a girl sucking on a sharp blade!             |
| cum           | Basically sticky white stuff that is usually milked from sharpies. |
| doujin        | Sends a random doujin page imageURL!                               |
| feet          | So you like smelly feet huh?                                       |
| femdom        | Female Domination?                                                 |
| foxgirl       | Girl's that are wannabe foxes, yes                                 |
| gifs          | Basically an animated image, so yes :3                             |
| glasses       | Girls that wear glasses, uwu~                                      |
| hentai        | Sends a random vanilla hentai imageURL~                            |
| netorare      | Wow, I won't even question your fetishes.                          |
| maid          | Maids, Maid Uniforms, etc, you know what maids are :3              |
| masturbation  | Solo Queue in CSGO!                                                |
| orgy          | Group Lewd Acts                                                    |
| panties       | I mean... just why? You like underwear?                            |
| pussy         | The genitals of a female, or a cat, you give the meaning.          |
| school        | School Uniforms!~ Yatta~!                                          |
| succubus      | Spooky Succubus, oh I'm so scared~ Totally don't suck me~          |
| tentacles     | I'm sorry but, why do they look like intestines?                   |
| thighs        | The top part of your legs, very hot, isn't it?                     |
| uglyBastard   | The one thing most of us can all agree to hate :)                  |
| uniform       | Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~               |
| yuri          | Girls on Girls, and Girl's only!<3                                 |
| zettaiRyouiki | That one part of the flesh being squeeze in thigh-highs~<3         |

## Wallpaper Function(s)

Example:

```javascript
akaneko.nsfw.function(); // NSFW Format
akaneko.nsfw.mobileWallpapers(); // NSFW Example
```

| Function                        | Description                              |
| ------------------------------- | ---------------------------------------- |
| akaneko.mobileWallpapers()      | Fetch a random SFW Wallpaper! (Mobile)   |
| akaneko.wallpapers()            | Fetch a random SFW Wallpaper! (Desktop)  |
| akaneko.nsfw.mobileWallpapers() | Fetch a random NSFW Wallpaper! (Mobile)  |
| akaneko.nsfw.wallpapers()       | Fetch a random NSFW Wallpaper! (Desktop) |

## How to Resolve Promises

```javascript
// Akaneko //
const akaneko = require('akaneko');

// Option 1, using and calling an asyncronous function //
async function yourFunctionName() {
  return console.log(await akaneko.nsfw.maid()); // Output: Some weird long link that you probably will definitely try to open //
}

// Don't forget to call your function! //
yourFunctionName();

// Option 2, Returning a Promise //
akaneko.nsfw.maid().then((imageURL) => {
  return console.log(imageURL);
});
``` -->

## Sources

All the images have no specific place where they came from, twitter, any booru, nhentai, etc.

## Disclaimer

I am not the creator of any images, if there is an image that is considered extremely inappropriate or just needs to be removed in general,
please send me the URL of the image and I will remove it as soon as possible :)
