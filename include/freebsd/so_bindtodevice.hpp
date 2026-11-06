#pragma once
#include <string_view>

namespace freebsd {
struct SoBindToDeviceDef {
    static constexpr int opt_name = 0x100b;
    static constexpr std::string_view name = "SO_BINDTODEVICE";
    static constexpr std::string_view desc = "Bind socket to specific network interface by name";
};
}
