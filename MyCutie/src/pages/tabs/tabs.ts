import { Component } from '@angular/core';

import { NotesPage } from '../notes/notes';
import { HelpmePage } from '../helpme/helpme';
import { ShowusPage } from '../showus/showus';
import { HomePage } from '../home/home';
import { BetterPage } from '../better/showus';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabNotes = NotesPage;
  tabHelpMe = HelpmePage;
  tabShowUs = ShowusPage;
  tabHome = HomePage;
  tabBetter = BetterPage;

  constructor() {

  }
}
