declare module "nativescript-plugin-firebase" {

    /**
     * The allowed values for LoginOptions.type.
     */
    enum LoginType {
      /**
       * No further data is required.
       */
      ANONYMOUS,
      /**
       * This requires you to pass in email and password properties as well.
       */
      PASSWORD,
      /**
       * This requires you to pass either an authentication token generated by your backend server
       * or the tokenProviderFn function that returns a promise to provide the token.
       * See: https://firebase.google.com/docs/auth/server
       */
      CUSTOM,
      /**
       * This requires you to setup Facebook Auth in the Firebase console,
       * as well as uncommenting the SDK includes in include.gradle (Android) and Podfile (iOS).
       */
      FACEBOOK
    }

    /**
     * The allowed values for QueryOptions.orderBy.type.
     */
    enum QueryOrderByType {
      KEY,
      VALUE,
      CHILD,
      PRIORITY
    }

    /**
     * The allowed values for QueryOptions.range.type.
     */
    enum QueryRangeType {
      START_AT,
      END_AT,
      EQUAL_TO
    }

    /**
     * The allowed values for QueryOptions.limit.type.
     */
    enum QueryLimitType {
      FIRST,
      LAST
    }
}