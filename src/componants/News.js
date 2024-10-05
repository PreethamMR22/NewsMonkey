import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
static defaultProps= {

  pageSize:9,
  category:"general",
}
static propTypes= {

  pageSize:PropTypes.number,
  category:PropTypes.string,
}

  article = [
    {
      source: {
        id: null,
        name: "MLB.com",
      },
      author: "Anthony DiComo",
      title: "OMG! Onward Mets Go thanks to Alonso's epic HR - MLB.com",
      description:
        "MILWAUKEE -- The season had all but ended. The Mets had all but boarded their flight home. Then Pete Alonso delivered the most significant hit of his life.",
      url: "https://www.mlb.com/news/mets-win-nl-wild-card-series-2024",
      urlToImage:
        "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/sz8gwn5ofjwlhvrdew9q.jpg",
      publishedAt: "2024-10-04T02:29:43Z",
      content:
        "MILWAUKEE -- The season had all but ended. The Mets had all but boarded their flight home. Then Pete Alonso delivered the most significant hit of his life.\r\nWith the Mets down to their final two outs… [+1476 chars]",
    },
    {
      source: {
        id: null,
        name: "MLB.com",
      },
      author: null,
      title: "Reds to hire Terry Francona as manager (source) - MLB.com",
      description:
        "The Reds are hiring Terry Francona to be their next manager, a source told MLB.com's Mark Feinsand. The club has not confirmed the news.\nFrancona, 65, who stepped down as Guardians manager after the 2023 season, returns to the dugout having managed three team…",
      url: "https://www.mlb.com/news/reds-terry-francona-manager-hire",
      urlToImage:
        "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/terbalfhoye096yg9z4f.jpg",
      publishedAt: "2024-10-04T02:28:37Z",
      content:
        "Francona, 65, who stepped down as Guardians manager after the 2023 season, returns to the dugout having managed three teams over a 23-year career. He has a 1,950-1,672 record with the Phillies (1997-… [+112 chars]",
    },
    {
      source: {
        id: null,
        name: "Nbcsportsphiladelphia.com",
      },
      author: "Corey Seidman",
      title:
        "No juicier way for Phillies to begin October than a meeting with the Mets - NBC Sports Philadelphia",
      description:
        "The Phillies will face a division rival in the NLDS for the third straight postseason and there couldn’t be a more interesting series to kick off their…",
      url: "https://www.nbcsportsphiladelphia.com/mlb/philadelphia-phillies/phillies-news/nlds-phillies-mets-playoffs-first-time/620458/",
      urlToImage:
        "https://media.nbcsportsphiladelphia.com/2024/10/GettyImages-2174056403.jpg?quality=85&strip=all&resize=1200%2C675",
      publishedAt: "2024-10-04T02:23:56Z",
      content:
        "Get ready for a Phillies-Mets NLDS.\r\nThe Mets made a dramatic ninth-inning comeback Thursday night in their do-or-die Game 3 of the wild-card round, beating the Brewers 4-2 on a three-run homer from … [+3354 chars]",
    },
    {
      source: {
        id: null,
        name: "NorthJersey.com",
      },
      author: "Andrew Tredinnick",
      title:
        "Mets vs. Brewers Game 3: Live updates of NL Wild Card game in Milwaukee - NorthJersey.com",
      description:
        "The Mets' 2024 season is on the line for Game 3 of the NL Wild Card against the Brewers. Follow here for live updates.",
      url: "https://www.northjersey.com/story/sports/mlb/mets/2024/10/03/ny-mets-brewers-game-3-live-updates-lineup-how-watch/75497129007/",
      urlToImage:
        "https://www.northjersey.com/gcdn/authoring/authoring-images/2024/10/04/PNJM/75506763007-usatsi-24394997.jpg?crop=3123,1757,x0,y162&width=3123&height=1757&format=pjpg&auto=webp",
      publishedAt: "2024-10-04T01:52:30Z",
      content:
        "MILWAUKEE The Mets' season was teetering on the brink of disaster.\r\nPete Alonso, in what might have been his final game with the team, ensured that would not be the case.\r\nAlonso ripped a go-ahead th… [+3323 chars]",
    },
    {
      source: {
        id: null,
        name: "MMA Fighting",
      },
      author: "Damon Martin",
      title:
        "Kayla Harrison gets involved in nasty war of words with Julianna Pena and Ketlen Vieira - MMA Fighting",
      description:
        "Kayla Harrison may be opening the UFC 307 pay-per-view main card but she ended up as the central focus during the pre-fight press conference after engaging in a war of words with two different fighters",
      url: "https://www.mmafighting.com/2024/10/3/24261721/kayla-harrison-gets-involved-in-nasty-war-of-words-with-julianna-pena-and-ketlen-vieira",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/fiHVDAbaizKOSZZA6wtuS6_fTgw=/0x0:5203x2724/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25657404/2176536192.jpg",
      publishedAt: "2024-10-04T01:00:00Z",
      content:
        "Kayla Harrison isnt the main event at UFC 307, but she definitely took center stage during a couple of heated exchanges during the pre-fight press conference on Thursday.\r\nIt was almost expected that… [+4340 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Angela Tricarico",
      title:
        "How to watch Buccaneers-Falcons live for free in Thursday Night Football - New York Post ",
      description:
        "Another divisional matchup is being featured on TNF tonight.",
      url: "https://nypost.com/2024/10/03/sports/how-to-watch-tnf-for-free-buccaneers-falcons-time-streaming/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2024/10/bucs-falcons.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2024-10-03T23:39:00Z",
      content:
        "New York Post may be compensated and/or receive an affiliate commission if you buy through our links. Featured pricing is subject to change.\r\nWeek 5 of the NFL is kicking off with an all-NFC South ma… [+3617 chars]",
    },
    {
      source: {
        id: null,
        name: "Niners Nation",
      },
      author: "Kyle Posey",
      title:
        "One of the 49ers starters was added to the injury report on Thursday - Niners Nation",
      description:
        "After not playing in the second half against the New England Patriots, cornerback San Franciso 49ers CB Isaac Yiadom was limited during Thursday’s practice",
      url: "https://www.ninersnation.com/2024/10/3/24261664/isaac-yiadom-renardo-green-george-kittle-fred-warner-49ers-injury-report",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/8LWLjqJ99po137phhMe1lUHGkcU=/0x0:5070x2654/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25657328/2172222310.jpg",
      publishedAt: "2024-10-03T23:38:43Z",
      content:
        "The San Francisco 49ers injury report is out, and for the second day in a row, tight end George Kittle (ribs) and linebacker Fred Warner (ankle) did not practice.\r\nThe Niners are in a tricky spot. Th… [+2453 chars]",
    },
    {
      source: {
        id: null,
        name: "Clemsontigers.com",
      },
      author: null,
      title:
        "Clemson’s Memorial Stadium Selected as Banana Ball World Tour Host Site - Clemson Tigers",
      description:
        "BANANA BALL RULES | BANANAS YOUTUBE SAVANNAH, Ga. - The Savannah Bananas Baseball Club has selected Clemson University’s Memorial Stadium, also known as Death Valley, as one of its sites on the 2025 Banana Ball World Tour during their city draft, held Thursda…",
      url: "https://clemsontigers.com/clemsons-memorial-stadium-selected-as-banana-ball-world-tour-host-site/",
      urlToImage: "https://clemsontigers.com/amt-media/736091",
      publishedAt: "2024-10-03T23:25:03Z",
      content:
        "BANANA BALL RULES | BANANAS YOUTUBE\r\nSAVANNAH, Ga. – The Savannah Bananas Baseball Club has selected Clemson Universitys Memorial Stadium, also known as Death Valley, as one of its sites on the 2025 … [+2387 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Charean Williams",
      title:
        "Thursday Night Football: Falcons rookie Ruke Orhorhoro active for first time - NBC Sports",
      description:
        "The Falcons drafted defensive lineman Ruke Orhorhoro in the second round this spring.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/thursday-night-football-falcons-rookie-ruke-orhorhoro-active-for-first-time",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/f34afbd/2147483647/strip/true/crop/5409x3043+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F09%2F64%2F1860c53849e5aa00304afa021697%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2167276038",
      publishedAt: "2024-10-03T23:13:40Z",
      content:
        "The Falcons drafted defensive lineman Ruke Orhorhoro in the second round this spring. He will make his debut on Thursday Night Football.\r\nThe team made Orhorhoro a healthy scratch the first four game… [+739 chars]",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: "Timothy Rapp",
      title:
        "Brewers' Willy Adames Says He Waited for Mets' Jesse Winker in Parking Lot After Game - Bleacher Report",
      description:
        "Milwaukee Brewers shortstop Willy Adames confirmed to reporters on Thursday that he not only told New York Mets designated hitter Jesse Winker to meet him in…",
      url: "https://bleacherreport.com/articles/10137994-brewers-willy-adames-says-he-waited-for-mets-jesse-winker-in-parking-lot-after-game",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/x_0,y_87,w_1800,h_1196,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1727996469/zqpljepurpo4gymmf301.jpg",
      publishedAt: "2024-10-03T23:07:53Z",
      content:
        "Larry Radloff/Icon Sportswire via Getty Images\r\nMilwaukee Brewers shortstop Willy Adames confirmed to reporters on Thursday that he not only told New York Mets designated hitter Jesse Winker to meet … [+2616 chars]",
    },
    
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "Where to watch Mets vs. Brewers: TV channel, MLB Wild Card Series schedule, live stream postseason baseball - CBS Sports",
      description: "The best-of-three series wraps on Thursday in Milwaukee",
      url: "https://www.cbssports.com/mlb/news/where-to-watch-mets-vs-brewers-tv-channel-mlb-wild-card-series-schedule-live-stream-postseason-baseball/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2024/10/03/987f116f-5199-426c-b467-6f248b5fbbd2/thumbnail/1200x675/84239803a7db73c5c3417bd19362e6ed/quintana-getty.png",
      publishedAt: "2024-10-03T22:49:00Z",
      content:
        "The first win-or-go-home game of the 2024 MLB postseason is here. The Milwaukee Brewers are hosting the New York Mets on Thursday night in Wild Card Series Game 3. The winner advances in the playoff … [+2295 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Christian Arnold",
      title:
        "Antonio Pierce gets NCAA punishment for violations that included taking prospect’s parents to ‘gentleman’s club’ - New York Post ",
      description:
        "Antonio Pierce was handed an eight-year show-cause order over violations that happened during his time as an assistant coach at Arizona State.",
      url: "https://nypost.com/2024/10/03/sports/antonio-pierce-gets-punished-by-ncaa-over-violations/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2024/10/newspress-collage-vmzuzzgzo-1727992454372.jpg?quality=75&strip=all&1727978108&w=1024",
      publishedAt: "2024-10-03T22:36:00Z",
      content:
        "Antonio Pierce was handed an eight-year show-cause order over violations that happened during his time as an assistant coach at Arizona State, which included taking a prospect’s parents to a gentleme… [+3162 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Ben Baby",
      title: "Fan's spilled drink on RB Brown deemed accident - ESPN",
      description:
        "The NFL has determined that a drink-spilling incident involving a fan and Bengals running back Chase Brown was an accident.",
      url: "https://www.espn.com/nfl/story/_/id/41593944/fan-spilled-drink-bengals-chase-brown-deemed-accident",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1001%2Fr1394339_1024x576_16%2D9.jpg",
      publishedAt: "2024-10-03T22:28:00Z",
      content:
        "CINCINNATI -- An investigation by the NFL into a drink-spilling incident involving a fan and Cincinnati Bengals running back Chase Brown has been deemed an accident, a league spokesperson said Thursd… [+1547 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Baxter Holmes",
      title: "Rondo, eyeing coaching career, joins Bucks - ESPN",
      description:
        "Rajon Rondo has spent the week with the Bucks as a guest coach for their training camp and will remain with the team in an unspecified capacity this season.",
      url: "https://www.espn.com/nba/story/_/id/41593563/rajon-rondo-joins-bucks-guest-coach-training-camp",
      urlToImage:
        "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F1121%2Fr778908_1296x729_16%2D9.jpg",
      publishedAt: "2024-10-03T21:59:00Z",
      content:
        "IRVINE, Calif. -- In June, when former NBA All-Star and two-time champion Rajon Rondo married his wife in Lake Como, Italy, his first NBA head coach was among the attendees. And there, Milwaukee Buck… [+6405 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Katherine Terrell",
      title: "Saints' Carr would welcome reunion with Adams - ESPN",
      description:
        "Saints quarterback Derek Carr said he would love the chance to play with former teammate Davante Adams again.",
      url: "https://www.espn.com/nfl/story/_/id/41593008/saints-derek-carr-welcome-reunion-davante-adams",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1003%2Fr1395669_1296x729_16%2D9.jpg",
      publishedAt: "2024-10-03T21:31:00Z",
      content:
        "METAIRIE, La. -- New Orleans Saints quarterback Derek Carr said he would love the chance to play with former teammate Davante Adams again if the opportunity presented itself.\r\nAdams is currently unde… [+2838 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Sam Fortier",
      title:
        "Commanders quarterly report: Standouts, disappointments, pressing questions - The Washington Post",
      description:
        "At 3-1, the arrow is pointing up for the Washington Commanders. There is plenty to praise from the first four games, even beyond rookie sensation Jayden Daniels.",
      url: "https://www.washingtonpost.com/sports/2024/10/03/commanders-quarterly-report/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6HUT2USNVVDWRLZVYVCVY3UD6I_size-normalized.jpg&w=1440",
      publishedAt: "2024-10-03T21:24:31Z",
      content:
        "The Washington Commanders finished the first quarter of the season 3-1, the talk of the league and with more hope than there has been for the franchise in the past decade. The team is leading the NFC… [+6507 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "2025 NFL Mock Draft: Two quarterbacks from 2023 draft replaced, Washington gets weapon for Jayden Daniels - CBS Sports",
      description:
        "Three quarterbacks are taken in the top 10 of the 2025 NFL Draft",
      url: "https://www.cbssports.com/nfl/draft/news/2025-nfl-mock-draft-two-quarterbacks-from-2023-draft-replaced-washington-gets-weapon-for-jayden-daniels/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2024/09/23/e079835e-8201-4e55-8ce8-ab321ae3a799/thumbnail/1200x675/2f21b14e26f5c9be7456ad68d127903e/gettyimages-2173645374.jpg",
      publishedAt: "2024-10-03T21:14:00Z",
      content:
        "Based on the first four weeks of the NFL season, the 2025 NFL Draft order is going to look quite different than anticipated, which creates different scenarios for the top prospects. \r\nTexas quarterba… [+1625 chars]",
    },
    {
      source: {
        id: null,
        name: "Deseret News",
      },
      author: "Trent Wood",
      title:
        "A closer look at Utah State volleyball’s decision to forfeit to SJSU - Deseret News",
      description:
        "Why did the Utah State volleyball team forfeit its match with San Jose State University? Who is Blaire Fleming?",
      url: "https://www.deseret.com/sports/2024/10/03/utah-state-volleyball-transgender-forfeit/",
      urlToImage:
        "https://www.deseret.com/resizer/v2/JZZITXIJF5R3AFAPNLQRYBTZWE.jpg?focal=0%2C0&auth=8bbc158ee8f2512161a0ecf9f1ed01a93211a618b90cd4a5ca711a42871513ee&width=1200&height=630",
      publishedAt: "2024-10-03T21:03:16Z",
      content:
        "Utah States womens volleyball team on Wednesday became the fourth team this fall to forfeit a match against San Jose State, joining Southern Utah, Boise State and Wyoming.\r\nThe forfeiture of the upco… [+7899 chars]",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: "Paul Kasabian",
      title:
        "Windhorst: 'Surprised' How Many NBA Execs Told Me Wolves Won Towns Trade with Knicks - Bleacher Report",
      description:
        'ESPN\'s Brian Windhorst reported Thursday that he was "surprised" at the amount of executives who believed the Minnesota Timberwolves won their trade with the…',
      url: "https://bleacherreport.com/articles/10137965-windhorst-surprised-how-many-nba-execs-told-me-wolves-won-towns-trade-with-knicks",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1727986265/bp5gjsy72eiilqeetu8j.jpg",
      publishedAt: "2024-10-03T21:00:00Z",
      content:
        'Stephen Maturen/Getty Images\r\nESPN\'s Brian Windhorst reported Thursday that he was "surprised" at the amount of executives who believed the Minnesota Timberwolves won their trade with the New York Kn… [+2667 chars]',
    },
  ];
  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: true,
      page:2,
    };
  }
totalpage=1;

  async componentDidMount(pagenum) {
    this.setState({loading:true});
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=ef6e77ca6c474213b53e1b47520499a2&page=${pagenum}&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json();
    this.setState({loading:false});
    console.log(parsedData.totalResults);
    this.setState({article:parsedData.articles})
    this.totalpage=parsedData.totalResults/this.props.pageSize + 1;
    console.log(this.totalpage);
  }
  HandlePrevClick=async ()=> {

    this.setState({page:this.state.page-1});
    this.componentDidMount(this.state.page);
  }
 HandleNextClick=async ()=> {
   this.setState({page:this.state.page+1});
   this.componentDidMount(this.state.page);
  }
  render() {
    return (
   
      <div className="container my-3">
        
        <h1 className="headline text-center">NewsMonkey - Top headlines</h1>
        {this.state.loading && <Spinner></Spinner>}
     <div className="row">
          {!this.state.loading && this.state.article.map((elem) => {
            return (
              <div className="col-md-4" key={elem.url}>
               
                <NewsItems
                  newsUrl={elem.url}
                  title={elem.title}
                  imgUrl={elem.urlToImage}
                  description={elem.description}
                ></NewsItems>
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-between container">
            <button type="button" onClick={this.HandlePrevClick} disabled={this.state.page<=1?true:false} className="btn btn-dark"> <i className="fa-solid fa-arrow-left"></i> Prev</button>
            <button type="button"  onClick={this.HandleNextClick} disabled={this.state.page<=this.totalpage?false:true}className="btn btn-dark">Next <i className="fa-solid fa-arrow-right"></i></button>
          </div>


      </div>
    );
  }
}

export default News;
