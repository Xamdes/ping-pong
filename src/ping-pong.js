export function pingPong(goal)
{
  var output = [];
  for (var i = goal; i; i--)
  // for (var i = 1; i <= goal; i++)
  {
    var isPing = !(i%3);
    var isPong = !(i%5);
    var returnValue = "";

    if(isPing)
    {
      returnValue += "ping";
      if(isPong)
      {
        returnValue += "-pong";
      }
    }
    else if(isPong)
    {
      returnValue += "pong";
    }
    else
    {
      returnValue = i;
    }
    output.push(returnValue)
  }
  return output.reverse();
}
