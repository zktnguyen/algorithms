import java.util.*;
import java.io.*;

public class Subranges {
  private static final String FILENAME = "input.txt";
  private static HashMap<String, Integer> cache = new HashMap();
  private static int subrange(ArrayList<Integer> prices, int start, int end) {
    int decreasingRanges = 0, increasingRanges = 0;
    
    System.out.println(prices.get(start));
    for (int j = start; j < end; j++){
      
      if ( j+1 != end && prices.get(j) <= prices.get(j+1)){
        increasingRanges++;
      }
      else if (j + 1 != end) {
        decreasingRanges++;
      }
    }
    
    return increasingRanges - decreasingRanges;
  }

  private static void subranges(int N, int K, ArrayList<Integer> prices) {
    for (int i = 0; i < N- K + 1; i++){
      int start = i;
      int end = i + K;
      if (end <= N){
        System.out.println(subrange(prices, start, end));
      }
    }
  }

  public static void main (String[] args) {
    String s1 = "", s2 = "";
    try {
      FileReader fileReader = new FileReader(FILENAME);
      BufferedReader bufferedReader = new BufferedReader(fileReader);
      
      s1 = bufferedReader.readLine();
      s2 = bufferedReader.readLine();
      // Always close files.
      bufferedReader.close();         
    }
    catch(FileNotFoundException ex) {
        System.out.println("Unable to open file '" + FILENAME + "'");                
    }
    catch(IOException ex) {
        System.out.println("Error reading file '" + FILENAME + "'");
    }

    String[] days = s1.split(" ");
    String[] prices = s2.split(" ");
    
    int N = Integer.parseInt(days[0]);
    int K = Integer.parseInt(days[1]);

    ArrayList<Integer> listOfPrices = new ArrayList<Integer>();

    for (String s : prices){
      listOfPrices.add(Integer.parseInt(s));
    }

    subranges(N, K, listOfPrices);
  }
}