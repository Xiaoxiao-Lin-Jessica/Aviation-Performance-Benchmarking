# Repository Directory

## Overview
This directory contains interfaces or classes that handle data access operations. Repositories abstract the data source and provide an in-memory domain object collection.

## What to put here:
1. **JPA Repositories**: Interfaces that extend Spring Data JPA interfaces, such as `JpaRepository` or `CrudRepository`.
2. **Custom Repository Classes**: Custom data access classes or implementations for complex queries.
3. **Query Methods**: Methods defined in repository interfaces to perform specific queries based on method names.
