# User Tests for CasterFire application

User testing checklist for CasterFire spell and spell book tracker.

## Authentication

- [ ] Toggle `Register` checkbox swaps between Login form and Register form.
- [ ] Unable to register with invalid email, for example typing in "purple.com".
- [ ] Unable to register without correct password requirements (1 uppercase, 1 lowercase, 8 characters, 1 number, and 1 symbol).
- [ ] Able to register with valid email and password.
- [ ] `Save` button is disabled until requirements are met for email and password.
- [ ] Registration logs user in.
- [ ] Able to log out. Relevant parts of UI are hidden when doing so.
- [ ] Unable to re-register with existing email address.
- [ ] Unable to log in with bad username/password.
- [ ] Able to log in with correct username/password.
- [ ] If page is closed without user logging out, user remains logged in on revisit.

## Not Logged In

### Menu - Authentication

- [ ] Menu contains login/register form.
- [ ] `New character` button is not visible.

### Spell List

- [ ] Spell List should show 806 spells, not including any custom spells.
- [ ] Spell names show up in list, without "custom" tag.
- [ ] Spell list correctly shows spell level and first letter of spell type.
- [ ] "New Custom Spell" button is not present.
- [ ] Clicking on spell opens that spell in the spell details pane.

### Spell Details

- [ ] When no spell is selected, details pane is replaced by a witty message.
- [ ] "Log in to save spells and create characters" message appears.
- [ ] `Save as Custom`, `Edit`, and `Delete` buttons are not visible.
- [ ] `X` button closes spell.
- [ ] Selecting a different spell when one is already selected correctly updates all fields to new spell.

### Search

- [ ] Able to search by words in spell title and in spell description.
- [ ] Spell list is updated with spells only meeting those criteria.
- [ ] Buttons added to applied filters area when search box has text.

### Filters Options

- [ ] `Sources` filter is not visible.
- [ ] `Actions`, `Components`, `Spell Level`, `Traits`, and `Traditions` filters are visible.
- [ ] `Actions` shows only to spells containing any one of the selected actions.
- [ ] `Actions` > `Show All` button resets to default, showing all spells.
- [ ] `Components` shows only spells matching all selected options.
- [ ] `Components` > `Show All` button resets to default, showing all spells.
- [ ] `Spell Level` > Only filters when both an equality and level are present.
- [ ] `Spell Level` > Shows only spells matching the given equality and level.
- [ ] `Spell Level` > `🚫` button resets to default, showing all spells.
- [ ] `Traditions` > Defaults to showing all spells.
- [ ] `Traditions` > Shows only spells containing all of the selected traditions.
- [ ] `Traditions` > `Show All` button resets to default, showing all spells.
- [ ] `Traits` > Defaults to showing all spells, with no boxes selected.
- [ ] `Traits` > Shows only spells matching all of the selected traits.
- [ ] `Traits` > `Show All` button resets to default, showing all spells.

### Applied filters

- [ ] Visible only when any filter is not its default values.
- [ ] `Clear All` button removes all filters and hides the applied filters area.
- [ ] Clicking an applied filter removes only that filter.
- [ ] Hide/Show `>` button toggles applied filter visibility.
- [ ] Hide/Show `>` button outlined in red if filters are applied and it is hidden.

## Logged in

### Menu - Characters

- [ ] Menu replaced with character options once logged in.
- [ ] `New Character` button visible when no character is selected.
- [ ] If user has any created characters, they are in the list.
- [ ] If user has no characters, "No characters!" message is shown.
- [ ] UI updates when character is selected.
  - [ ] Character name, level, and class appear under user name in header.
  - [ ] `Edit Character` and `Clear Selection` buttons are visible.
- [ ] Clicking `New Character` opens blank "Character Edit/Create" modal window.
- [ ] Clicking `Edit Character` opens "Character Edit/Create" modal window with Character values filled in.
- [ ] Clicking `Clear Selection` updates UI and reverts back to default (with `New Character` button).

### Character edit/create popup

- [ ] Form Validation
  - [ ] Required fields are `Name` and `Class`. Other fields do not show required.
  - [ ] Unable to submit form without required fields.
  - [ ] Additional fields filled in do not generate errors or prevent saving.
- [ ] Able to save character with requirements met.
- [ ] After saving, new character is automatically selected.
- [ ] Selected character shows up both in the menu and under the user's name (top right corner)
- [ ] Able to edit character and save.
- [ ] Able to delete character.
- [ ] Multiple characters can be added and swapped between.

### Combined Spell List

- [ ] Spell List should show 806 spells, not including any custom spells.
- [ ] Spell list should also show any custom spells created by the user.
- [ ] Spell list correctly shows spell level and first letter of spell type.
- [ ] If user has created custom spells, they appear in alphabetical order in the spell list, with the "custom" tag next to the name.
- [ ] `New Custom Spell` button is present.
- [ ] Clicking `New Custom Spell` brings up spell creation
- [ ] Clicking on spell opens that spell in the spell details pane.
  - [ ] Default spells open.
  - [ ] Custom spells open.

### Default Spell Details

- [ ] When no spell is selected, details pane is replaced by a witty message.
- [ ] `Edit` and `Delete Spell` buttons are not visible (unless custom, see below).
- [ ] `Copy to Custom` button is visible.
- [ ] Clicking `Copy to Custom` brings up spell creation screen with selected spell values populated.
- [ ] `X` button closes spell.
- [ ] Selecting a different spell when one is already selected correctly updates all fields to new spell, regardless of being custom or default.
- [ ] If no character is selected "Select character to add spells to a spell book" message appears at top.
- [ ] If character is selected:
  - [ ] Either `Add to Spellbook` or `Remove from Spellbook` button is visible.
  - [ ] Clicking `Add to Spellbook` button changes button to `Remove from Spellbook`.
  - [ ] Clicking `Remove from Spellbook` button changes button to `Add to Spellbook`.
  - [ ] Able to add multiple spells to spell book. Jot down the names (they will be verified in the filters section, below).

### Custom Spell Details

- [ ] Double asterisk footnote notation is visible.
- [ ] `Edit`, `Copy to Custom`, and `Delete Spell` buttons are visible.
- [ ] `Edit` button brings up spell in editor window, with existing spell info populated.
- [ ] `Copy to Custom` button brings up the spell editor with the selected spell's information filled in.
- [ ] Delete button removes spell from spell list.
- [ ] `X` button closes spell.
- [ ] Selecting a different spell when one is already selected correctly updates all fields to new spell, regardless of being custom or default.
- [ ] If no character is selected "Select character to add spells to a spell book" message appears at top.
- [ ] If character is selected:
  - [ ] Either `Add to Spellbook` or `Remove from Spellbook` button is visible.
  - [ ] Clicking `Add to Spellbook` button changes button to `Remove from Spellbook`.
  - [ ] Clicking `Remove from Spellbook` button changes button to `Add to Spellbook`.
  - [ ] Able to add multiple spells to spell book. Jot down the names (they will be verified in the filters section, below).

### Filters

- [ ] `Sources` menu is visible in filter bar.
- [ ] `Sources` > When only `Rulebook` is toggled on, only default spells are shown in list.
- [ ] `Sources` > When only `Custom` is toggled on, only custom spells are shown in list.
- [ ] `Sources` > `Only [character name]'s` button is visible only when a character is selected.
- [ ] `Sources` > When `Only [character name]'s` is toggled on, only spells for selected character are visible.
- [ ] The same conditions are met as with non-logged in users, only with custom spells included.

### Spell Edit Screen

- [ ] When errors are present, `Form Errors` box is visible, showing fields with error.
- [ ] When errors are present, `Save` button is disabled.
- [ ] Spells coming from `Edit` button:
  - [ ] When form loads, it contains the values for the (existing) selected spell.
  - [ ] On `Save`, existing custom spell is updated in the UI and shows changes.
- [ ] Spells coming from `Copy as Custom` button:
  - [ ] When form loads, it contains the values for the (existing) selected spell.
  - [ ] On `Save`, selected spell is copied as a new spell in the UI, showing saved changes.
  - [ ] On `Save`, previously selected spell is unchanged in the UI.
- [ ] Spells coming from `New Custom Spell` button:
  - [ ] When form loads, all values are blank and `Form Errors` is visible, showing required fields.
  - [ ] On `Save`, existing custom spell is updated in the UI and shows changes.

### User Report

- [ ] Menu opens user report in new tab and shows registered date.
