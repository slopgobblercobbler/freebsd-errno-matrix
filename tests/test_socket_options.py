import json
import os
import unittest

class TestSocketOptions(unittest.TestCase):
    def test_sol_socket_constants(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'socket_options.json')
        with open(p, 'r') as f:
            data = json.load(f)
        opts = data['SOL_SOCKET']
        self.assertEqual(opts['SO_DEBUG'], 1)
        self.assertEqual(opts['SO_REUSEADDR'], 4)
        self.assertEqual(opts['SO_KEEPALIVE'], 8)
        self.assertEqual(opts['SO_BROADCAST'], 32)
        self.assertEqual(opts['SO_SNDBUF'], 4097)
        self.assertEqual(opts['SO_TYPE'], 4104)

    def test_ip_options(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'ip_options.json')
        with open(p, 'r') as f:
            data = json.load(f)
        self.assertEqual(data['IPPROTO_IP']['IP_MULTICAST_TTL'], 10)
        self.assertEqual(data['IPPROTO_IPV6']['IPV6_V6ONLY'], 27)

if __name__ == '__main__':
    unittest.main()
