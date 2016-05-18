function pow(num, power) {
    var result = num;
    if (power > 0)
    {
        while (power > 1)
        {
            result = result * num;
            power--;
        } 
        return result;
    }
    else if (power < 0)
    {
        power *= -1;
        while (power > 1)
        {
            result = result * num;
            power--;
        } 
        return 1/result;
    }
    else
    {
        return 1;
    }
}

var promptNumber = prompt('Input number: ');
var userNumber = parseInt(promptNumber);
if (isNaN(userNumber))
{
    console.log('Number invalid!');
}
else 
{
    var promptPower = prompt('Input power: ');
    var userPower = parseInt(promptPower);
    if (isNaN(userPower))
    {
        console.log('Power is not a number!');
    } 
    else
    {
        console.log(pow(userNumber, userPower));
    }   
}