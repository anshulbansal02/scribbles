export function strokeScale(strokeValue) {
	// x in range [a,b] = y in range [c,d] = (x-a)((d-c)/(b-a))+c |  Here [1,25] [0.1,0.8]
	return (strokeValue - 1) * 0.035 + 0.05;
}
