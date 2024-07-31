export function formatDownloadsNumber(num: number): string {
	const formatter = new Intl.NumberFormat('en-US', {
		notation: 'compact',
		compactDisplay: 'short'
	});
	return formatter.format(num);
}
