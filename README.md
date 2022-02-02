# CasterFire Documentation

## What is CasterFire?

Simply put, CasterFire is a way for players of the Pathfinder 2nd Edition tabletop roleplaying game to keep track of their spells.

## Why?

When Pathfinder 2nd Edition was released in 2020, there was a disparaging lack of tooling, when compared to the 1st Edition of the game. By mid 2020, the publisher had already released a supplemental book which introduced more content and they have since released many more books. In the first two books alone, there were 807 spells, spanning hundreds of pages and two books. At best, a player may have a total of 100 of these spells available for their character to cast, and each character would have different options, based on choices they make in the game. Additionally, there was no way to search for spells without finding each one, individually, in the book. Enter CasterFire, a tool which takes away all of that pain, by allowing the player to quickly filter spells based on multiple criteria, as well as store the spells for a particular character in one easy to find place. Spells can be taken from the book, cloned and modified, or created completely from scratch.

## Usage

CasterFire is, at its core, a database of Pathfinder spells. In accordance with the Open Gaming License (OGL), access to the spells, and the ability to filter or search for them, is available without creating an account. Creating an account, however, adds the ability to create characters and save spells to that character, for easy access. The spell list can be narrowed down easily and quickly with the available filters.

### Getting Started

This web application was designed for use on a computer and, while some considerations were made for mobile, it may not function as intended on a phone-size screen, due to the nature of testing on multiple devices. I am but one man, with limited funds and device testing is expensive. The site should still function fine on mobile or tablet, but, depending on the screen size, some things could look a little wonky.

The initial release of the spell list only includes spells from the first two Pathfinder 2nd Edition books released by the publisher. The intent is to add more as the app gains popularity.

- Menu
  - Located in upper left corner.
  - Used to register, login, and logout.
  - Once logged in, character options are visible.
  - Contains a "Users Report" link to see all users and when they joined.
  - Character Options
    - Initially, the character list will be empty.
    - Click on the "New Character" button to create a new character.
    - Switch between characters, edit, or de-select characters using the menu.
- Spell list
  - Located along the left side of the application.
  - Clicking a spell opens it in the details pane, to the right.
  - By default, contains only the full list of spells in the Pathfinder books.
  - If logged in an option to create a new spell appears at the top of the list.
- Spell Details
  - The spell details screen is populated by selecting a spell from the spell list.
  - If logged in:
    - Option to copy a Pathfinder spell and edit it as a custom spell.
    - Option to edit, delete, or clone an existing custom spell.
- Filters
  - Perform live filtering on the spell list.
  - By default, shows all Pathfinder and Custom spells available.
  - Sources Filter
    - Rulebook and Custom buttons are used to hide or show Pathfinder spells or custom spells, respectively.
    - If logged in and a character is selected, Sources will contain a button for "Only [Character Name]'s".
      - To view only spells that have been added to the selected character (that character's spell book), select "Only [CharacterName]'s".
      - Note: you can still filter a character's spells by Rulebook and Custom. In order to see a character's full spell book, with both Rulebook and Custom spells, both of these options would need to remain checked.
  - Actions Filter
    - Used to filter spells that contain one or more of the checked action costs. By default, does not perform filtering.
  - Components Filter
    - Contains both Cast Times (if longer than 1 round) and Cast Requirements.
  - Spell Level Filter
    - Allows filtering by the level of the spell (less than or equal, greater than or equal, and equal.
  - Traditions Filter
    - Allows picking a specific magic tradition (also known as a spell list).
    - Note: if an option is selected, a spell will only show up if it is on all of the selected tradition lists.
  - Traits Filter
    - This filter is rather large, but will filter by specific spell traits.
    - Organized by trait category.
    - Note: Spells will only show up if they contain all of the selected traits. This may mean that the filter yields zero results (for example, if you selected Darkness and Light).
  - Search Filter
    - Filters spell list, searching both spell name and spell description for the typed text.

## Local environment (dev)

### Setup

1. Download and install the [Node 16.9.1](https://nodejs.org/dist/v16.9.1/) installer for your operating system.
2. Download or clone this Git Repo.
3. Place .env file in `casterfire-api-test/src/` folder of the project. This will be provided by project maintainer.
4. Open a command or bash prompt at the project root folder (`casterfire-api-test/`), and run `npm install`.
5. Once dependencies are installed, run the command `npm run dev -- --open`. This should open the dev version of the site in your default browser.

### Running automated tests

The filter system for this application is very complex. Because of this, I implemented Jest as a pass/fail test check, to make sure the functions are running correctly. The results of these tests can be verified by stopping the running Node.js server (CTRL+C on the command prompt from earlier) and running the command `npm run test`.

### User tests

These can be viewed in the UserTests.md file located in the project root. Each tester will need to perform these tests.

### Dev data viewer

When site is running in dev mode, it is possible to see any information in any store. By clicking on the purple `</>` button, hidden in the lower right corner of the page, a popup will appear which allows visibility into the underlying data of any store at any time.
