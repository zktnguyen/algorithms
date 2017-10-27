public class leastCommonSubsequence {
  
  public static LCS(char[] A, char[] B) {
    int[][] L = new int[A.length + 1][B.length + 1];
    L[0][0] = 0;

    for (int i = 0; i <= A.length; i++) {
      for (int j = 0; i <= B.length; j++) {
        if (i == 0 || j == 0) L[i][j] = 0;
        else if (A[i - 1] == B[j - 1]) {
          L[i][j] = L[i-1][j-1] + 1;
        }
        else {
          L[i][j] = Math.max(L[i-1][j], L[i][j-1]);
        }
      }
    }

    return L[A.length][B.length];
  }
  
  public static void main(String[] args) {

  }
}