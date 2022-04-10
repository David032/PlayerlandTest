// --------------------------
// Interview Question 1
// --------------------------
const createSaleCountdownTicker = (elementId: string, saleStartDate: Date, saleEndDate: Date) => 
{
  const TodaysDate = new Date();

  if (TodaysDate.getTime() >= saleStartDate.getTime() 
      && saleEndDate.getTime() > TodaysDate.getTime() ) 
  {
    const TimeElapsedSoFar = getTimeRemaining(saleStartDate,TodaysDate);
    //Get diff. between time elapsed so far and time remaining
    //loop over each element(HH:MM:SS) and reduce them by one to make them match?
    initializeClock(elementId, saleEndDate, TodaysDate);
  }
}

function initializeClock(elementId: string, saleEndDate: Date, TodaysDate: Date) {
  var targetElement = document.getElementById(elementId);
  var timeLeft = getTimeRemaining(saleEndDate, TodaysDate);
  const timeinterval = setInterval(() => {
    targetElement.innerHTML = 
    getPresentableTime(timeLeft.hours) + ':' 
    + getPresentableTime(timeLeft.minutes)  + ': ' 
    + getPresentableTime(timeLeft.seconds) + ' Remaining';
    if (timeLeft.total <= 0) {
      clearInterval(timeinterval);
    }
  },
    1000);
}

function getTimeRemaining(targetTime,TodaysDate) {
  const total = Date.parse(targetTime) - TodaysDate;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function getPresentableTime(time:number): string
{
  return ('0' + time).slice(-2);
}



// --------------------------
// Interview Question 2
// --------------------------
class NumberScale {

  constructor(
    private readonly minValue: number,
    private readonly maxValue: number,
  ) {}

  public getScaleIntervals(): number[] 
  {
    //Change this to false for unrounded processing
    var UseRounded = true;
    if (UseRounded) 
    {
      var ScaleIntervals = this.getRoundedScaleIntervals();
    }
    else
    {
      var ScaleIntervals = this.getUnroundedScaleIntervals();
    }
    return ScaleIntervals;

  }

  //Always returns 10 values, is always equal to min(max some of the time), 
  //are evenly spaced, boundries are rounded to nearest 10 for clarity
  private getRoundedScaleIntervals() {
    var roundedMinValue = 10 * Math.ceil(this.minValue / 10);
    var roundedMaxValue = 10 * Math.ceil(this.maxValue / 10);
    console.log(roundedMinValue + " - " + roundedMaxValue);
    var rangeRequired = roundedMaxValue - roundedMinValue;
    console.log(rangeRequired);
    var ScaleIntervals = this.getIntervalDivision(rangeRequired, 10);
    return ScaleIntervals;
  }

  //Variable number of returns, is always equal to min(max most of the time), 
  //values are evenly spaced
  private getUnroundedScaleIntervals()
  {
    var rangeRequired = this.maxValue - this.minValue;
    if (rangeRequired % 2 == 0) 
    {
      if (rangeRequired % 10 == 0) 
      {
        var ScaleIntervals = this.getIntervalDivision(rangeRequired, 10);
        return ScaleIntervals;
      } 
      else 
      {
        if (rangeRequired <= 48) 
        {
          var ScaleIntervals = this.getIntervalDivision(rangeRequired, 12);
          return ScaleIntervals;
        } 
        else 
        {
          var ScaleIntervals = this.getIntervalDivision(rangeRequired, 8);
          return ScaleIntervals;
        }
      }  
    } 
    else 
    {
      if (rangeRequired <= 18) 
      {
        var ScaleIntervals = this.getIntervalDivision(rangeRequired, 9);
        return ScaleIntervals;
      } 
      else 
      {
        var ScaleIntervals = this.getIntervalDivision(rangeRequired, 11);
        return ScaleIntervals;
      }
    }

  }

  private getIntervalDivision(range:number, interval:number) :number[]
  {
    const increment = range/interval;
    let Intervals = new Array<number>(interval);
    for (let index = 0; index < interval; index++) 
    {
      Intervals[index] = this.minValue + (index * increment)      
    }
    return Intervals;
  }
}
