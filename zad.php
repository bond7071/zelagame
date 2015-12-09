<?php
namespace forlightsoft;

/**
 * This is a test class.
 *  It consists of functions which can be used to check if a string is palindrome or
 * if a string has a  palindrome substring.
 *
 *
 */


class Palindrome
{

    /**
     * Converts a string to lower case.
     * Deletes symbols " ", ".", ",", "-", "!", "?", ":", ";", "\"" from a string.
     *
     * @param string $str
     * @return string
     */
  public static function purify($str)
  {
      $symb = array(" ", ".", ",", "-", "!", "?", ":", ";", "\"" );
      $strlc = mb_strtolower($str);
      return  str_replace($symb, '', $strlc);
  }


    /**
     * Checks if a string is a palindrome.
     *
     * @param string $str
     * @return boolean
     */

  public static function isPalindrome($str)
  {
      $purestr = self::purify($str);


      for ($i=1; $i<=mb_strlen($purestr)/2; $i++){
          if (!(mb_substr($purestr, $i-1, 1) == mb_substr($purestr, mb_strlen($purestr)-$i, 1))){

              return false;
          }

      }
      return true;

  }

    /**
     * Checks if a string has palindrome substring.
     * If it has, returns such substring with max length.
     * if no such a substring returns first letter of a string.
     * @param string $str
     * @return string
     */

  public static function getMaxPalindrome($str)
  {

     $l = mb_strlen($str);

     for ($i=$l; $i>1; $i--){
         for ($j=1; $j<=$l-$i+1; $j++){

             if (self::isPalindrome(mb_substr($str, $j-1, $i))){
                 return mb_substr($str, $j-1, $i);

             };
         }
     }

      return mb_substr($str, 0, 1);

  }

}






$str = 'gggПаліндром - і ні морд, ні лап';

if (Palindrome::isPalindrome($str)){
    echo 'Палиндром:'.$str;
}
else{
    echo 'Не палиндром <br>', Palindrome::getMaxPalindrome($str);}



