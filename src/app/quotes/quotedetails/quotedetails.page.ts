import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.page.html',
  styleUrls: ['./quotedetails.page.scss'],
})
export class QuotedetailsPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
  };
  showToolbar = false;
  status: boolean = false;

  onScroll($event) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 20;
    }
  }

  qouteid: any;
  qoutedata: any;

  topiclist = [
    {
      id: 1,
      img: 'assets/img/qoutes.jpg',
      title: 'Discouraged',
      quote:
        'Suﬀering, failure, loneliness, sorrow, discouragement, and death will be part of your journey, but the Kingdom of God will conquer all these horrors. No evil can resist grace forever. ',
      name: 'Brennan Manning',
    },
    {
      id: 2,
      img: 'assets/img/qoutes1.jpg',
      title: 'Worried',
      quote:
        'Worry does not empty tomorrow of its sorrow. It empties today of its strength. ',
      name: 'Corrie Ten Boom',
    },
    {
      id: 3,
      img: 'assets/img/qoutes2.jpg',
      title: 'Lonely',
      quote:
        'Look for yourself, and you will find in the long run only hatred, loneliness, despair, rage, ruin, and decay. But look for Christ, and you will find Him, and with Him everything else thrown in. ',
      name: 'C.S Lewis',
    },
    {
      id: 4,
      img: 'assets/img/qoutes3.jpg',
      title: 'Depressed',
      quote:
        '"Character cannot be developed in ease and quiet. Only through experience of trial and suﬀering can the soul be strengthened, ambition inspired, and success achieved." ',
      name: 'Helen Keller',
    },
    {
      id: 5,
      img: 'assets/img/qoutes.jpg',
      title: 'Peace',
      quote:
        'God cannot give us a happiness and peace apart from Himself, because it is not there. There is no such thing.',
      name: 'C.S Lewis',
    },
    {
      id: 6,
      img: 'assets/img/qoutes.jpg',
      title: 'Guilt',
      quote:
        'God loves us too much to leave us alone to contend with the pain, guilt and loneliness of our present life.',
      name: 'Josh McDowell',
    },
    {
      id: 7,
      img: 'assets/img/qoutes.jpg',
      title: 'Tired',
      quote:
        'We can be tired, weary and emotionally distraught, but after spending time alone with God, we find that He injects into our bodies energy, power and strength.',
      name: 'Charles Stanley',
    },
    {
      id: 8,
      img: 'assets/img/qoutes.jpg',
      title: 'Stressed',
      quote:
        "God will never give you anything you can't handle, so don't stress. Kelly ",
      name: 'Clarkson',
    },
    {
      id: 9,
      img: 'assets/img/qoutes.jpg',
      title: 'Physical Pain',
      quote:
        '“One of life’s greatest paradoxes is that it’s in the crucible of pain and suﬀering that we become tender.”',
      name: 'Brennan Manning',
    },
    {
      id: 10,
      img: 'assets/img/qoutes.jpg',
      title: 'Emotional Pain',
      quote:
        '“God, who foresaw your tribulation, has specially armed you to go through it, not without pain but without stain.”',
      name: 'C. S. Lewis',
    },
    {
      id: 11,
      img: 'assets/img/qoutes.jpg',
      title: 'Confused',
      quote:
        '“God turns you from one feeling to another and teaches by means of opposites so that you will have two wings to fly, not one”',
      name: 'Rumi',
    },
    {
      id: 12,
      img: 'assets/img/qoutes.jpg',
      title: 'Angry',
      quote:
        '“Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.”',
      name: 'Mark Twain',
    },
    {
      id: 13,
      img: 'assets/img/qoutes.jpg',
      title: 'Afraid',
      quote:
        '“I learned that courage was not the absence of fear, but the triumph over it. The brave person is not he who does not feel afraid, but he who conquers that fear.”',
      name: 'Nelson Mandela',
    },
    {
      id: 14,
      img: 'assets/img/qoutes.jpg',
      title: 'Rejected',
      quote:
        '“A rejection is nothing more than a necessary step in the pursuit of success.”',
      name: 'Bo Bennett',
    },
    {
      id: 15,
      img: 'assets/img/qoutes.jpg',
      title: 'Doubt',
      quote:
        '“Our doubts are traitors, and make us  lose the good we oft might win, by fearing to attempt.”',
      name: 'William Shakespeare',
    },
    {
      id: 16,
      img: 'assets/img/qoutes.jpg',
      title: 'Guidance',
      quote:
        "“When God takes out the trash, don't go digging back through it. Trust Him.”",
      name: 'Amaka Imani Nkosazana',
    },
    {
      id: 17,
      img: 'assets/img/qoutes.jpg',
      title: 'Faith',
      quote:
        '“Keep the faith. The vision is always for the appointed time. Be patient, prayerful and wait for the fulfillment of your visions.”',
      name: 'Lailah Gifty Akita',
    },
    {
      id: 18,
      img: 'assets/img/qoutes.jpg',
      title: 'Strength',
      quote:
        'You are stronger than you think, because the power of Almighty God is available to you. Your strength is renewed when you trust in Him. ',
      name: 'Kendra Tillman',
    },
    {
      id: 19,
      img: 'assets/img/qoutes.jpg',
      title: 'Forgiveness',
      quote:
        'Forgiveness is the fragrance that the violet sheds on the heel that has crushed it.',
      name: 'Mark Twain',
    },
    {
      id: 20,
      img: 'assets/img/qoutes.jpg',
      title: 'Relationships',
      quote:
        '“The most painful thing is losing yourself in the process of loving someone too much, and forgetting that you are special too.”',
      name: 'Ernest Hemingway',
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.qouteid = this.activatedRoute.snapshot.params['qouteid'];
    this.qoutedata = this.topiclist[this.qouteid - 1];
  }

  ionViewWillEnter() {
    var data = JSON.parse(localStorage.getItem('favquotes'));
    if (data == null || data == '') {
      data = [];
    }
    var isActive = data.indexOf(parseInt(this.qouteid));
    if (isActive != -1) {
      this.status = true;
    } else {
      this.status = false;
    }
  }

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
