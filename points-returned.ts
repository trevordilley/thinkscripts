def underlyingPrice =
    close(GetUnderlyingSymbol());
def actualUnderlying =
    Fold index = 0 to 49
    with data = underlyingPrice do
    if !IsNaN(GetValue(underlyingPrice,-index))
    then GetValue(underlyingPrice,-index)
    else data;



plot return = if volume > 0 and !IsNan(volume) then (bid + GetStrike()) - actualUnderlying else Double.Nan;
