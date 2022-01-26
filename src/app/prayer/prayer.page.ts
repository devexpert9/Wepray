import {
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
  Component,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.page.html',
  styleUrls: ['./prayer.page.scss'],
})
export class PrayerPage implements OnInit {
  showToolbar = false;
  isAudioPlaying: boolean = false;
  status: boolean = false;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output() playEvent = new EventEmitter();
  @Output() pauseEvent = new EventEmitter();

  onScroll($event) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 20;
    }
  }
  // @ViewChild('audioPlayer', { static: true }) audioPlayer: ElementRef;
  constructor(
    private activatedroute: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  prayerid: any;
  prayerdata: any;
  favArray: any = [];
  existingList: any = [];
  audioList: any = [];

  //Access audio player dom
  @ViewChild('audioPlayer', { static: false }) audioPlayer: ElementRef;

  topiclist = [
    {
      id: 1,
      img: 'assets/img/icon1.svg',
      title: 'Discouraged',
      quote:
        'Suﬀering, failure, loneliness, sorrow, discouragement, and death will be part of your journey, but the Kingdom of God will conquer all these horrors. No evil can resist grace forever. ',
      name: 'Brennan Manning',
      desc: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go./” Joshua 1:9',
      audio: [
        {
          url: 'assets/audio/discouraged.mp3',
        },
      ],
    },
    {
      id: 2,
      img: 'assets/img/icon2.svg',
      title: 'Worried',
      quote:
        'Worry does not empty tomorrow of its sorrow. It empties today of its strength. ',
      name: 'Corrie Ten Boom',
      desc: 'Instead of worrying, pray... before you know it, a sense of God’s wholeness, everything coming together for good, will come and settle you down. Philippians 4:6',
      audio: [
        {
          url: 'assets/audio/worried.mp3',
        },
      ],
    },
    {
      id: 3,
      img: 'assets/img/icon3.svg',
      title: 'Lonely',
      quote:
        'Look for yourself, and you will find in the long run only hatred, loneliness, despair, rage, ruin, and decay. But look for Christ, and you will find Him, and with Him everything else thrown in. ',
      name: 'C.S Lewis',
      desc: 'I’ve picked you. I haven’t dropped you.’ Don’t panic. I’m with you. There’s no need to fear for I’m your God. I’ll give you strength. I’ll help you. I’ll hold you steady, keep a firm grip on you. Isaiah 41:10',
      audio: [
        {
          url: 'assets/audio/loneliness.mp3',
        },
        {
          url: 'assets/audio/loneliness2.mp3',
        },
        {
          url: 'assets/audio/loneliness3.mp3',
        },
      ],
    },
    {
      id: 4,
      img: 'assets/img/icon4.svg',
      title: 'Depressed',
      quote:
        '"Character cannot be developed in ease and quiet. Only through experience of trial and suﬀering can the soul be strengthened, ambition inspired, and success achieved." ',
      name: 'Helen Keller',
      desc: 'Is anyone crying for help? God is listening, ready to rescue you. If your heart is broken, you’ll find God right there; if you’re kicked in the gut, he’ll help you catch your breath. Psalm 34:17',
      audio: [
        {
          url: 'assets/audio/depressed.mp3',
        },
        {
          url: 'assets/audio/depressed2.mp3',
        },
      ],
    },
    {
      id: 5,
      img: 'assets/img/icon5.svg',
      title: 'Peace',
      quote:
        'God cannot give us a happiness and peace apart from Himself, because it is not there. There is no such thing.',
      name: 'C.S Lewis',
      desc: 'Do not be anxious about anything, but in every situation, by prayer… present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds… Philippians 4:6',
      audio: [
        {
          url: 'assets/audio/peace.mp3',
        },
        {
          url: 'assets/audio/peace2.mp3',
        },
      ],
    },
    {
      id: 6,
      img: 'assets/img/icon5.svg',
      title: 'Guilt',
      quote:
        'God loves us too much to leave us alone to contend with the pain, guilt and loneliness of our present life.',
      name: 'Josh McDowell',
      desc: '“This is how much God loved the world: He gave his Son, his one and only Son…. God came to help, to put the world right again. Anyone who trusts in him is acquitted… John 3:16',
      audio: [
        {
          url: 'assets/audio/guilty.mp3',
        },
        {
          url: 'assets/audio/guilty2.mp3',
        },
      ],
    },
    {
      id: 7,
      img: 'assets/img/icon5.svg',
      title: 'Tired',
      quote:
        'We can be tired, weary and emotionally distraught, but after spending time alone with God, we find that He injects into our bodies energy, power and strength.',
      name: 'Charles Stanley',
      desc: 'Are you tired? Worn out? … Get away with me and you’ll recover your life. I’ll show you how to take a real rest. Walk with me … learn the unforced rhythms of grace…. keep company with me and you’ll learn to live freely and lightly.” Matthew 11:28',
      audio: [
        {
          url: 'assets/audio/tired.mp3',
        },
        {
          url: 'assets/audio/tired2.mp3',
        },
      ],
    },
    {
      id: 8,
      img: 'assets/img/icon5.svg',
      title: 'Stressed',
      quote:
        "God will never give you anything you can't handle, so don't stress. Kelly ",
      name: 'Clarkson',
      desc: 'My parting gift to you… Peace. I don’t leave you the way you’re used to being left—feeling abandoned, bereft. So don’t be upset. Don’t be  distraught. John 14:27',
      audio: [
        {
          url: 'assets/audio/stressed.mp3',
        },
        {
          url: 'assets/audio/stressed2.mp3',
        },
      ],
    },
    {
      id: 9,
      img: 'assets/img/icon5.svg',
      title: 'Physical Pain',
      quote:
        '“One of life’s greatest paradoxes is that it’s in the crucible of pain and suﬀering that we become tender.”',
      name: 'Brennan Manning',
      desc: 'Even though on the outside it often looks like things are falling apart on us, on the inside, where God is making new life, not a day goes by without his unfolding grace. These hard times are small potatoes compared to the coming good times, the lavish celebration prepared for us. 2 Corinthians 4:16',
      audio: [
        {
          url: 'assets/audio/pain-physical.mp3',
        },
        {
          url: 'assets/audio/pain-physical2.mp3',
        },
      ],
    },
    {
      id: 10,
      img: 'assets/img/icon5.svg',
      title: 'Emotional Pain',
      quote:
        '“God, who foresaw your tribulation, has specially armed you to go through it, not without pain but without stain.”',
      name: 'C. S. Lewis',
      desc: 'Even though on the outside it often looks like things are falling apart on us, on the inside, where God is making new life, not a day goes by without his unfolding grace. These hard times are small potatoes compared to the coming good times, the lavish celebration prepared for us. 2 Corinthians 4:16',
      audio: [
        {
          url: 'assets/audio/pain_emotional.mp3',
        },
        {
          url: 'assets/audio/pain_emotional2.mp3',
        },
      ],
    },
    {
      id: 11,
      img: 'assets/img/icon5.svg',
      title: 'Confused',
      quote:
        '“God turns you from one feeling to another and teaches by means of opposites so that you will have two wings to fly, not one”',
      name: 'Rumi',
      desc: '5-12 Trust God from the bottom of your heart; don’t try to figure out everything on your own. Listen for God’s voice in everything you do, everywhere you go; he’s the one who will keep you on track. Proverbs 3:5',
      audio: [
        {
          url: 'assets/audio/confused.mp3',
        },
        {
          url: 'assets/audio/confused2.mp3',
        },
      ],
    },
    {
      id: 12,
      img: 'assets/img/icon5.svg',
      title: 'Angry',
      quote:
        '“Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.”',
      name: 'Mark Twain',
      desc: 'Lead with your ears, follow up with your tongue, and let anger straggle along in the rear. God’s righteousness doesn’t grow from human anger. In simple humility, let God, landscape you with the Word, making a salvation-garden of your life. James 1:19-20',
      audio: [
        {
          url: 'assets/audio/anger.mp3',
        },
        {
          url: 'assets/audio/anger2.mp3',
        },
      ],
    },
    {
      id: 13,
      img: 'assets/img/icon5.svg',
      title: 'Afraid',
      quote:
        '“I learned that courage was not the absence of fear, but the triumph over it. The brave person is not he who does not feel afraid, but he who conquers that fear.”',
      name: 'Nelson Mandela',
      desc: 'I pulled you in from all over the world, called you in from every dark corner of the earth… I’ve picked you. I haven’t dropped you. Don’t panic. I’m with you. There’s no need to fear for I’m your God. I’ll give you strength. I’ll  help you. I’ll hold you steady, keep a firm grip on you. Isaiah 41:10-12',
      audio: [
        {
          url: 'assets/audio/afraid.mp3',
        },
        {
          url: 'assets/audio/afraid2.mp3',
        },
      ],
    },
    {
      id: 14,
      img: 'assets/img/icon5.svg',
      title: 'Rejected',
      quote:
        '“A rejection is nothing more than a necessary step in the pursuit of success.”',
      name: 'Bo Bennett',
      desc: 'God will never walk away from his people, never desert his precious people. Rest assured that justice is on its way and every good heart put right. Psalm 94:15',
      audio: [
        {
          url: 'assets/audio/rejected.mp3',
        },
      ],
    },
    {
      id: 15,
      img: 'assets/img/icon5.svg',
      title: 'Doubt',
      quote:
        '“Our doubts are traitors, and make us  lose the good we oft might win, by fearing to attempt.”',
      name: 'William Shakespeare',
      desc: 'Trust God from the bottom of your heart; don’t try to figure out everything on your own. Listen for God’s voice in everything you do, everywhere you go; he’s the one who will keep you on track. Proverbs 3:5-6',
      audio: [
        {
          url: 'assets/audio/doubt.mp3',
        },
        {
          url: 'assets/audio/doubt2.mp3',
        },
      ],
    },
    {
      id: 16,
      img: 'assets/img/icon5.svg',
      title: 'Guidance',
      quote:
        "“When God takes out the trash, don't go digging back through it. Trust Him.”",
      name: 'Amaka Imani Nkosazana',
      desc: 'By your words I can see where I’m going; they throw a beam of light on my dark path. Psalm 119:105',
      audio: [
        {
          url: 'assets/audio/guidance.mp3',
        },
        {
          url: 'assets/audio/guidance2.mp3',
        },
      ],
    },
    {
      id: 17,
      img: 'assets/img/icon5.svg',
      title: 'Faith',
      quote:
        '“Keep the faith. The vision is always for the appointed time. Be patient, prayerful and wait for the fulfillment of your visions.”',
      name: 'Lailah Gifty Akita',
      desc: '“If you embrace this kingdom life and don’t doubt God, you’ll not only do minor feats… but also triumph over huge obstacles. Matthew 21:21',
      audio: [
        {
          url: 'assets/audio/faith.mp3',
        },
      ],
    },
    {
      id: 18,
      img: 'assets/img/icon5.svg',
      title: 'Strength',
      quote:
        'You are stronger than you think, because the power of Almighty God is available to you. Your strength is renewed when you trust in Him. ',
      name: 'Kendra Tillman',
      desc: '“Be strong and courageous and do the work. Do not be afraid or discouraged, for the LORD God, my God is with you. He will not fail you or forsake you…” 1 Chronicles 28:20',
      audio: [
        {
          url: 'assets/audio/discouraged.mp3',
        },
        {
          url: 'assets/audio/discouraged2.mp3',
        },
      ],
    },
    {
      id: 19,
      img: 'assets/img/icon5.svg',
      title: 'Forgiveness',
      quote:
        'Forgiveness is the fragrance that the violet sheds on the heel that has crushed it.',
      name: 'Mark Twain',
      desc: 'Pray very simply. Like this: Our Father in heaven, Reveal who you are. Set the world right… Keep us forgiven with you and forgiving others… You’re in charge! Matthew 6:9–15',
      audio: [
        {
          url: 'assets/audio/forgiveness.mp3',
        },
      ],
    },
    {
      id: 20,
      img: 'assets/img/icon5.svg',
      title: 'Relationships',
      quote:
        '“The most painful thing is losing yourself in the process of loving someone too much, and forgetting that you are special too.”',
      name: 'Ernest Hemingway',
      desc: 'May God our Father himself and our Master Jesus clear the road to you! And may the Master pour on the love so it fills your lives and splashes over on everyone around you…! 1 Thessalonians 3:12',
      audio: [
        {
          url: 'assets/audio/relationships.mp3',
        },
      ],
    },
  ];

  ngOnInit() {
    console.log(this.playEvent);
    this.prayerid = this.activatedroute.snapshot.params['prayerid'];
    this.prayerdata = this.topiclist[this.prayerid - 1];
    this.audioList = this.shuffle(this.topiclist[this.prayerid - 1].audio);
    this.isAudioPlaying = true;
  }

  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  // Used like so

  ionViewWillEnter() {
    var data = JSON.parse(localStorage.getItem('fav'));
    if (data == null || data == '') {
      data = [];
    }
    var isActive = data.indexOf(parseInt(this.prayerid));
    if (isActive != -1) {
      this.status = true;
    } else {
      this.status = false;
    }
  }

  addToFav(data) {
    this.status = !this.status;
    var data1 = JSON.parse(localStorage.getItem('fav'));
    if (data1 == null || data1 == '') {
      data1 = [];
    }
    var index = data1.indexOf(data);
    if (index == -1) {
      data1.push(data);
    } else {
      data1.splice(index, 1);
    }
    localStorage.setItem('fav', JSON.stringify(data1));
  }

  ngAfterViewInit() {
    setTimeout(() => {
      var test: any = this.audioPlayer;
      test.repeatActive = true;
      test.audioPlayer.nativeElement.play();

      console.log(test);
      this.playEvent.emit();
    }, 1000);
  }
}
