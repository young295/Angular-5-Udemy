import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = true;
  serverCreationStatus = 'No server was created.';

  serverName = 'Test ServerName';
  serverCreated = false;

  servers = ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created, its name is: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
    console.log(this.serverName);
  }

}
