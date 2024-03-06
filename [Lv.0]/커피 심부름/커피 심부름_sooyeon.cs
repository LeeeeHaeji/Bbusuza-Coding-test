using System;

public class Solution
{
  public int solution(string[] order)
  {
    int num = 0;
    foreach (var item in order)
    {
      if (item.Contains("latte"))
      {
        num++;
      }
    }
    return (num * 5000 + (order.Length - num) * 4500);
  }
}