import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  showToolbar = false;
  status: boolean = false;
  onScroll($event) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 5;
    }
  }

  topiclist = [
    {
      id: 1,
      img: 'assets/img/qoutes.jpg',
      quote:
        'Suﬀering, failure, loneliness, sorrow, discouragement, and death will be part of your journey, but the Kingdom of God will conquer all these horrors. No evil can resist grace forever. ',
    },
    {
      id: 2,
      img: 'assets/img/qoutes1.jpg',
      quote:
        'Worry does not empty tomorrow of its sorrow. It empties today of its strength. ',
    },
    {
      id: 3,
      img: 'assets/img/qoutes2.jpg',
      quote:
        'Look for yourself, and you will find in the long run only hatred, loneliness, despair, rage, ruin, and decay. But look for Christ, and you will find Him, and with Him everything else thrown in. ',
    },
    {
      id: 4,
      img: 'assets/img/qoutes3.jpg',
      quote:
        '"Character cannot be developed in ease and quiet. Only through experience of trial and suﬀering can the soul be strengthened, ambition inspired, and success achieved." ',
    },
    {
      id: 5,
      img: 'assets/img/qoutes1.jpg',
      quote:
        'God cannot give us a happiness and peace apart from Himself, because it is not there. There is no such thing.',
    },
    {
      id: 6,
      img: 'assets/img/qoutes1.jpg',
      quote:
        'God loves us too much to leave us alone to contend with the pain, guilt and loneliness of our present life.',
    },
    {
      id: 7,
      img: 'assets/img/qoutes1.jpg',
      quote:
        'We can be tired, weary and emotionally distraught, but after spending time alone with God, we find that He injects into our bodies energy, power and strength.',
    },
    {
      id: 8,
      img: 'assets/img/qoutes1.jpg',
      quote:
        "God will never give you anything you can't handle, so don't stress. Kelly ",
    },
    {
      id: 9,
      img: 'assets/img/qoutes1.jpg',
      quote:
        '“One of life’s greatest paradoxes is that it’s in the crucible of pain and suﬀering that we become tender.”',
    },
    {
      id: 10,
      img: 'assets/img/qoutes1.jpg',
      quote:
        '“God, who foresaw your tribulation, has specially armed you to go through it, not without pain but without stain.”',
    },
    {
      id: 11,
      img: 'assets/img/qoutes1.jpg',
      quote:
        '“God turns you from one feeling to another and teaches by means of opposites so that you will have two wings to fly, not one”',
    },
    {
      id: 12,
      img: 'assets/img/qoutes1.jpg',
      quote:
        '“Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.”',
    },
    {
      id: 13,
      img: 'assets/img/qoutes1.jpg',
      quote:
        '“I learned that courage was not the absence of fear, but the triumph over it. The brave person is not he who does not feel afraid, but he who conquers that fear.”',
    },
    {
      id: 14,
      img: 'assets/img/qoutes1.jpg',
      quote:
        '“A rejection is nothing more than a necessary step in the pursuit of success.”',
    },
    {
      id: 15,
      img: 'assets/img/qoutes1.jpg',
      quote:
        '“Our doubts are traitors, and make us  lose the good we oft might win, by fearing to attempt.”',
    },
    {
      id: 16,
      img: 'assets/img/qoutes1.jpg',
      quote:
        "“When God takes out the trash, don't go digging back through it. Trust Him.”",
    },
    {
      id: 17,
      img: 'assets/img/qoutes1.jpg',
      title: 'Faith',
      quote:
        '“Keep the faith. The vision is always for the appointed time. Be patient, prayerful and wait for the fulfillment of your visions.”',
    },
    {
      id: 18,
      img: 'assets/img/qoutes1.jpg',
      quote:
        'You are stronger than you think, because the power of Almighty God is available to you. Your strength is renewed when you trust in Him. ',
    },
    {
      id: 19,
      img: 'assets/img/qoutes1.jpg',
      quote:
        'Forgiveness is the fragrance that the violet sheds on the heel that has crushed it.',
    },
    {
      id: 20,
      img: 'assets/img/qoutes1.jpg',
      quote:
        '“The most painful thing is losing yourself in the process of loving someone too much, and forgetting that you are special too.”',
    },
  ];

  constructor(private router: Router) {}

  sendData(id) {
    this.router.navigate(['/quotes/quotedetails/' + id]);
  }

  ngOnInit() {}

  addToFav(data) {
    this.status = !this.status;
    var data1 = JSON.parse(localStorage.getItem('favquotes'));
    if (data1 == null || data1 == '') {
      data1 = [];
    }

    var index = data1.indexOf(data);
    if (index == -1) {
      data1.push(data);
    } else {
      data1.splice(index, 1);
    }
    localStorage.setItem('favquotes', JSON.stringify(data1));
  }
}
