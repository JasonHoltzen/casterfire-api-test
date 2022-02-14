# User Tests for CasterFire application

User testing checklist for CasterFire spell and spell book tracker.

## Authentication

- [x] Toggle `Register` checkbox swaps between Login form and Register form.
- [x] Unable to register with invalid email, for example typing in "purple.com".
- [x] Unable to register without correct password requirements (1 uppercase, 1 lowercase, 8 characters, 1 number, and 1 symbol).
- [x] Able to register with valid email and password.
- [x] `Save` button is disabled until requirements are met for email and password.
- [x] Registration logs user in.
- [x] Able to log out. Relevant parts of UI are hidden when doing so.
- [x] Unable to re-register with existing email address.
- [x] Unable to log in with bad username/password.
- [x] Able to log in with correct username/password.
- [x] If page is closed without user logging out, user remains logged in on revisit.

## Not Logged In

### Menu - Authentication

- [x] Menu contains login/register form.
- [x] `New character` button is not visible.

### Spell List

- [x] Spell List should show 806 spells, not including any custom spells.
- [x] Spell names show up in list, without "custom" tag.
- [x] Spell list correctly shows spell level and first letter of spell type.
- [x] "New Custom Spell" button is not present.
- [x] Clicking on spell opens that spell in the spell details pane.

### Spell Details

- [x] When no spell is selected, details pane is replaced by a witty message.
- [x] "Log in to save spells and create characters" message appears.
- [x] `Save as Custom`, `Edit`, and `Delete` buttons are not visible.
- [x] `X` button closes spell.
- [x] Selecting a different spell when one is already selected correctly updates all fields to new spell.

### Search

- [x] Able to search by words in spell title and in spell description.
- [x] Spell list is updated with spells only meeting those criteria.
- [x] Buttons added to applied filters area when search box has text.

### Filters Options

- [x] `Sources` filter is not visible.
- [x] `Actions`, `Components`, `Spell Level`, `Traits`, and `Traditions` filters are visible.
- [x] `Actions` shows only to spells containing any one of the selected actions.
- [x] `Actions` > `Show All` button resets to default, showing all spells.
- [x] `Components` shows only spells matching all selected options.
- [x] `Components` > `Show All` button resets to default, showing all spells.
- [x] `Spell Level` > Only filters when both an equality and level are present.
- [x] `Spell Level` > Shows only spells matching the given equality and level.
- [x] `Spell Level` > `🚫` button resets to default, showing all spells.
- [x] `Traditions` > Defaults to showing all spells.
- [x] `Traditions` > Shows only spells containing all of the selected traditions.
- [x] `Traditions` > `Show All` button resets to default, showing all spells.
- [x] `Traits` > Defaults to showing all spells, with no boxes selected.
- [x] `Traits` > Shows only spells matching all of the selected traits.
- [x] `Traits` > `Show All` button resets to default, showing all spells.

### Applied filters

- [x] Visible only when any filter is not its default values.
- [x] `Clear All` button removes all filters and hides the applied filters area.
- [x] Clicking an applied filter removes only that filter.
- [x] Hide/Show `>` button toggles applied filter visibility.
- [x] Hide/Show `>` button outlined in red if filters are applied and it is hidden.

## Logged in

### Menu - Characters

- [x] Menu replaced with character options once logged in.
- [x] `New Character` button visible when no character is selected.
- [x] If user has any created characters, they are in the list.
- [x] If user has no characters, "No characters!" message is shown.
- [x] UI updates when character is selected.
  - [x] Character name, level, and class appear under user name in header.
  - [x] `Edit Character` and `Clear Selection` buttons are visible.
- [x] Clicking `New Character` opens blank "Character Edit/Create" modal window.
- [x] Clicking `Edit Character` opens "Character Edit/Create" modal window with Character values filled in.
- [x] Clicking `Clear Selection` updates UI and reverts back to default (with `New Character` button).

### Character edit/create popup

- [x] Form Validation
  - [x] Required fields are `Name` and `Class`. Other fields do not show required.
  - [x] Unable to submit form without required fields.
  - [x] Additional fields filled in do not generate errors or prevent saving.
- [x] Able to save character with requirements met.
- [x] After saving, new character is automatically selected.
- [x] Selected character shows up both in the menu and under the user's name (top right corner)
- [x] Able to edit character and save.
- [x] Able to delete character.
- [ ] Multiple characters can be added and swapped between.

### Combined Spell List

- [x] Spell List should show 806 spells, not including any custom spells.
- [x] Spell list should also show any custom spells created by the user.
- [x] Spell list correctly shows spell level and first letter of spell type.
- [x] If user has created custom spells, they appear in alphabetical order in the spell list, with the "custom" tag next to the name.
- [x] `New Custom Spell` button is present.
- [x] Clicking `New Custom Spell` brings up spell creation
- [x] Clicking on spell opens that spell in the spell details pane.
  - [x] Default spells open.
  - [x] Custom spells open.

### Default Spell Details

- [x] When no spell is selected, details pane is replaced by a witty message.
- [x] `Edit` and `Delete Spell` buttons are not visible (unless custom, see below).
- [x] `Copy to Custom` button is visible.
- [x] Clicking `Copy to Custom` brings up spell creation screen with selected spell values populated.
- [x] `X` button closes spell.
- [x] Selecting a different spell when one is already selected correctly updates all fields to new spell, regardless of being custom or default.
- [ ] If no character is selected "Select character to add spells to a spell book" message appears at top.
- [ ] If character is selected:
  - [ ] Either `Add to Spellbook` or `Remove from Spellbook` button is visible.
  - [ ] Clicking `Add to Spellbook` button changes button to `Remove from Spellbook`.
  - [ ] Clicking `Remove from Spellbook` button changes button to `Add to Spellbook`.
  - [ ] Able to add multiple spells to spell book. Jot down the names (they will be verified in the filters section, below).

### Custom Spell Details

- [x] Double asterisk footnote notation is visible.
- [x] `Edit`, `Copy to Custom`, and `Delete Spell` buttons are visible.
- [x] `Edit` button brings up spell in editor window, with existing spell info populated.
- [x] `Copy to Custom` button brings up the spell editor with the selected spell's information filled in.
- [x] Delete button removes spell from spell list.
- [x] `X` button closes spell.
- [x] Selecting a different spell when one is already selected correctly updates all fields to new spell, regardless of being custom or default.
- [x] If no character is selected "Select character to add spells to a spell book" message appears at top.
- [x] If character is selected:
  - [x] Either `Add to Spellbook` or `Remove from Spellbook` button is visible.
  - [x] Clicking `Add to Spellbook` button changes button to `Remove from Spellbook`.
  - [x] Clicking `Remove from Spellbook` button changes button to `Add to Spellbook`.
  - [x] Able to add multiple spells to spell book. Jot down the names (they will be verified in the filters section, below).

### Filters

- [x] `Sources` menu is visible in filter bar.
- [x] `Sources` > When only `Rulebook` is toggled on, only default spells are shown in list.
- [x] `Sources` > When only `Custom` is toggled on, only custom spells are shown in list.
- [x] `Sources` > `Only [character name]'s` button is visible only when a character is selected.
- [x] `Sources` > When `Only [character name]'s` is toggled on, only spells for selected character are visible.
- [x] The same conditions are met as with non-logged in users, only with custom spells included.

### Spell Edit Screen

- [x] When errors are present, `Form Errors` box is visible, showing fields with error.
- [x] When errors are present, `Save` button is disabled.
- [x] Spells coming from `Edit` button:
  - [x] When form loads, it contains the values for the (existing) selected spell.
  - [x] On `Save`, existing custom spell is updated in the UI and shows changes.
- [x] Spells coming from `Copy as Custom` button:
  - [x] When form loads, it contains the values for the (existing) selected spell.
  - [x] On `Save`, selected spell is copied as a new spell in the UI, showing saved changes.
  - [x] On `Save`, previously selected spell is unchanged in the UI.
- [x] Spells coming from `New Custom Spell` button:
  - [x] When form loads, all values are blank and `Form Errors` is visible, showing required fields.
  - [x] On `Save`, existing custom spell is updated in the UI and shows changes.

### User Report

- [x] Menu opens user report in new tab and shows registered date.
