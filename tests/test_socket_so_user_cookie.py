import json
import os
import unittest

class TestSocketUserCookie(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_so_user_cookie.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_cookie(self):
        self.assertEqual(self.data['SO_USER_COOKIE'], 4117)
        self.assertEqual(self.data['cookie_mask'], '0xFFFFFFFF')

if __name__ == '__main__':
    unittest.main()
