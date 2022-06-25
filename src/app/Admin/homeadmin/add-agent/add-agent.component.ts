import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {
  agent: Agent = {
    
    firstname:'',
    lastname: '',
    phone: '',
    email: '',
 
    pieceIdentity: '',
    n_pieceIdentity: '',
    address:''
  };
  submitted = false;
  constructor(private agentService: AgentService) { }
  ngOnInit(): void {
  }
  saveAgent(): void {
    const data = {
      firstname: this.agent.firstname,
      lastname: this.agent.lastname,
      phone: this.agent.phone,
      email: this.agent.email,

      pieceIdentity: this.agent.pieceIdentity,
      n_pieceIdentity: this.agent.n_pieceIdentity,
      address: this.agent.address
    };
    this.agentService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newAgent(): void {
    this.submitted = false;
    this.agent = {
      firstname:'',
      lastname: '',
      phone: '',
      email: '',
    
      pieceIdentity: '',
      n_pieceIdentity: '',
      address:''
    };
  }
}