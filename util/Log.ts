class Log
{
    static debugEnable : boolean;
    static debugLevel : LogLevel;

    static light(message : string)
    {
        if(this.debugEnable)
        {
            console.error(message);
        }
    }

    static medium(message : string)
    {
        if(this.debugEnable && (Log.debugLevel == LogLevel.Medium || Log.debugLevel == LogLevel.Verbose))
        {
            console.error(message);
        }
    }

    static verbose(message : string)
    {
        if(this.debugEnable && Log.debugLevel == LogLevel.Verbose)
        {
            console.error(message);
        }
    }
}

enum LogLevel{
    Light,
    Medium,
    Verbose
};