import { Injectable } from '@angular/core';

import { HttpService } from '../http/http.service';
import { PeopleService } from '../people/people.service';

import { People } from '../../models/people';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private currentGamer: People;
  private peopleList: People[];
  private peoplePicked: People;

  constructor(
    private httpService: HttpService,
    private peopleService: PeopleService,
  ) {
  }

  public reset = (): void => {
    this.peopleList = [];
    this.currentGamer = null;
    this.peoplePicked = null;
  }

  public async pickPeople(): Promise<People> {

    return this.peopleService.getAdultList().then(adultList => {
      this.peopleList = adultList;
      const peoplePicked = this.pick();
      this.savePeoplePicked(peoplePicked);
      return peoplePicked;
    });
  }

  private savePeoplePicked = (peoplePicked: People): void => {
    this.currentGamer.peoplePicked = peoplePicked.name;
    peoplePicked.isPicked = true;

    this.httpService.savePeoplePicked(this.currentGamer, peoplePicked);
  }

  private pick = (): People => {
    do {
      this.peoplePicked = this.peopleList[Math.floor(Math.random() * this.peopleList.length)];
    }
    while (
      this.peoplePicked._id === this.currentGamer._id || this.peoplePicked.isPicked
    );

    return this.peoplePicked;
  }

  public setGamer = (people: People): void => {
    this.currentGamer = people;
  }
}
