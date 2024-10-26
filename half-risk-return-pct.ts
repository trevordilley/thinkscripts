def underlyingPrice =
    close(GetUnderlyingSymbol());
def actualUnderlying =
    Fold index = 0 to 49
    with data = underlyingPrice do
    if !IsNaN(GetValue(underlyingPrice,-index))
    then GetValue(underlyingPrice,-index)
    else data;

def return = (bid + GetStrike()) - actualUnderlying;
def atRisk = actualUnderlying * 0.5;




plot pctReturn = (return/atRisk) * 100;
