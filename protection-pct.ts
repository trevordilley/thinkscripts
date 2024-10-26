def underlying = close(GetUnderlyingSymbol());
def actualUnderlying =
    Fold index = 0 to 49
    with data = underlying do
    if !IsNaN(GetValue(underlying,-index))
    then GetValue(underlying,-index)
    else data;


plot protection = (1 - ((actualUnderlying - bid)/actualUnderlying)) * 100;
