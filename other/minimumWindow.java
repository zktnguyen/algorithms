public class minimumWindow {
  public String minWindow(String s, String t) {
    HashMap<Character, Integer> match = new HashMap<Character, Integer>();
    int counter = t.length, minLength = Integer.MAX_VALUE,
        end = 0, start = 0, minStart = 0, len = s.length;
    
    for (int i = 0; i < counter; i++) {
      char c = t.charAt(i);
      if (match.containsKey(c)) {
        match.put(c, match.get(c) + 1);        
      }
      else {
        match.put(c, 1);
      }
    }

    while ( end < size ) {
      
      if (match.containsKey(s.charAt(end))) {
        int val = match.get(s.charAt(end));        
        if (val > 0) {
          counter--;
          match.put(s.charAt(end), --val);
        }
        
      }

    }
  }
}