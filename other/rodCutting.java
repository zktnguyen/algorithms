public class rodCutting {
  public static int rodCut(int[] prices, int rodSize) {
    int[] rodCutSolutions = new int[rodSize + 1];
    rodCutSolutions[0] = 0;
    for (int i = 1; i <= rodSize; i++) {
      int current = i;
      int max = Integer.MIN_VALUE;
      for (int j = 0; j < i; j++) {
        // the current maximum by cutting the rod by j length and adding price[j] to it
        max = Math.max(rodCutSolutions[current - j - 1] + prices[j], max);
      }
      rodCutSolutions[current] = max;
    }
    return rodCutSolutions[rodSize];
  }

  public static void main(String[] args) {
    int arr[] = new int[] {1, 5, 8, 9, 10, 17, 17, 20};
    int size = arr.length;
    System.out.println("Maximum obtainable value is " + rodCut(arr, size));
  }
}