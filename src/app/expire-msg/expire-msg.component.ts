import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-expire-msg',
  templateUrl: './expire-msg.component.html',
  styleUrls: ['./expire-msg.component.scss'],
})
export class ExpireMsgComponent implements OnInit {
  expireMsg: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginExpire']) {
        this.expireMsg =
          'Your current session has expired. Please login again to continue using this app!';
      }
    });
  }

  goToLoginPage() {
    this.router.navigate(['/']);
  }
}
