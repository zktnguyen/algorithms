import java.util.*;
import java.io.*;

public class Subranges {
  private static final String FILENAME = "input.txt";
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

    int decreasingRanges = 0;
    int increasingRanges = 0;

    for (int i = 0; i < N- K + 1; i++){
      int end = i + K;
      if (end <= N){
        System.out.println(listOfPrices.get(i));
        for (int j = i; j < end; j++){
          if ( j+1 != i + K && listOfPrices.get(j) <= listOfPrices.get(j+1)){
            increasingRanges++;
          }
          else if (j + 1 != i + K) {
            decreasingRanges++;
          }
        }
      }
      System.out.println(increasingRanges);
      System.out.println(decreasingRanges);
      increasingRanges = 0;
      decreasingRanges = 0;
    }

  }
}