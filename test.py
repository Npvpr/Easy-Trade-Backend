# import sys

# a = sys.argv[1]

# # def match_test(a):
# #     match a:
# #         case 1:
# #             print("hi")
# #         case 2:
# #             print("hello")

# # match_test(a)

# print(a)

def http_error(x, y):
    match x, y:
        case (0, 0):
            print("Origin")
        case (0, y):
            print(f"Y={y}")
        case (x, 0):
            print(f"X={x}")
        case (x, y):
            print(f"X={x}, Y={y}")
        case _:
            raise ValueError("Not a point")

http_error(1, None)