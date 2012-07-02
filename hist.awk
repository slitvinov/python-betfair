{
    if ($1>90) {
	time=90
    } else {
	time=$1
    }
    q=int((time)/15.0001)
    print q
}