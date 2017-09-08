import java.util.*;
import java.io.*;

public class Subranges {
  private static final String FILENAME = "input.txt";
  public static void main (String[] args) {
    String s1, s2;
    try {
      FileReader fileReader = new FileReader(FILENAME);
      GBufferedReader bufferedReader = new BufferedReader(fileReader);
      
      s1 = bufferedReader.readLine();
      s2 = bufferedReader.readLine();
      // Always close files.
      bufferedReader.close();         
    }
    catch(FileNotFoundException ex) {
        System.out.println("Unable to open file '" + fileName + "'");                
    }
    catch(IOException ex) {
        System.out.println("Error reading file '" + fileName + "'");
    }

    
    

  }
}